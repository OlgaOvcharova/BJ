import { Component, OnInit } from '@angular/core';

import { GameService } from '../services/game.service';
import { DbService } from '../services/db.service';
import { Subscription, Observable, Subject } from 'rxjs';
import { takeUntil, map, pluck, switchMap, tap, filter } from 'rxjs/operators';
import { MenuComponent } from '../menu/menu.component';
import { ActivatedRoute } from '@angular/router';
import { forEach } from '@angular/router/src/utils/collection';
import { PlayerIndex } from '@angular/core/src/render3/interfaces/player';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  public room: TRoom = {
    players: [

    ],
    id: null,
    deck: [],
    result: null
  }

  public result: TResult = {
    isShownButtons: false,
    winner: '',
    score: [],
    isShownCards: false
  }

  public dealer: TUser = {
    id: 0,
    userName: 'Dealer',
    playerHand: [],
    userScore: 0
  }


  private readonly _WIN_SCORE: number = 21;
  private readonly _ENOUGH_SCORE: number = 15;
  private _destroy$ = new Subject();

  public constructor(
    private _dbService: DbService,
    private _gameService: GameService,
    private _route: ActivatedRoute,
    private _userService: UserService
  ) { }
  

  ngOnInit() {
    this._route.params.pipe(
      pluck('id'),
      switchMap((id: number) => {
        
        return this._dbService.getRoom(id)
      }, 
      ),takeUntil(this._destroy$))
      .subscribe((room) => {
        console.log(room);
        this.room = room
        if (!room.players) {
          room.players = [];
          room.players.push(this._userService.getAllUser(), this.dealer);;
        }
        room.players.forEach((player: TUser) => {
          if(!player.playerHand) {
            player.playerHand = [];
            player.userScore = 0;
          }
        })
        if (!room.result.score){
          room.result.score = [];
        }
      });
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }

  public newGame(): void {
    this.room.result.isShownButtons = true;
    this.room.result.winner = '';

    this.room.result.score = [{userName: 'You', userScore: 0}, {userName: 'Dealer', userScore: 0}];
    this.room.result.isShownCards = false;

    this.room.players.forEach((player: TUser) => {

      if (player.playerHand) {
        this.room.deck = this.room.deck.concat(...player.playerHand);
        player.playerHand = [];
        player.userScore = 0;
      }
    })
    
    this.room.players.forEach((player) => {
      player.playerHand.push(this.room.deck.pop());
      player.userScore += player.playerHand[player.playerHand.length - 1].value;
    })
 
    this.room.result.isShownButtons = true;
    this._dbService.addRoom(this.room);
  }

  public onHit(): void {
    while (this.room.players[0].userScore <= this._WIN_SCORE) {
      this.room.players[0].playerHand.push(this.room.deck.pop());
      this.room.players[0].userScore += this.room.players[0].playerHand[this.room.players[0].playerHand.length - 1].value;

      if(this.room.players[0].userScore >= this._WIN_SCORE){
        this.room.result.winner = this._gameService.getWinner(this.room.players[0].userScore, this.room.players[1].userScore);
        this.room.result.isShownButtons = false;
        this.room.result.isShownCards = true;
      }
      
      if (this.room.players[1].userScore <= this._ENOUGH_SCORE){
        this.room.players[1].playerHand.push(this.room.deck.pop());
        this.room.players[1].userScore += this.room.players[1].playerHand[this.room.players[1].playerHand.length - 1].value;
      }
      return;
    }
    this._dbService.addRoom(this.room);  
  }

  public onStand(): void {
    this.room.result.isShownButtons = false;
    this.room.result.isShownCards = true;
    while (this.room.players[1].userScore < this._ENOUGH_SCORE) {
      this.room.players[1].playerHand.push(this.room.deck.pop());
      this.room.players[1].userScore += this.room.players[1].playerHand[this.room.players[1].playerHand.length - 1].value;
    }
    this.room.result.winner = this._gameService.getWinner(this.room.players[0].userScore, this.room.players[1].userScore);
    this._dbService.addRoom(this.room);
  }
}