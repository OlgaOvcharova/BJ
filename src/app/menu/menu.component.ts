/* tslint:disable */
import { Component, Input, Output, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Observable, Subscription } from 'rxjs';
import { GameService } from '../services/game.service';
import { DbService } from '../services/db.service';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  public user = {
    userName: String(this._userService.getUser())
  };

  private readonly _ROOM = {
    id: 0,
    deck: this._gameService.getDeck(),
    players: [
     
    ],
    result: {
      isShownButtons: false,
      winner: '',
      score: [],
      isShownCards: false
    },
  } 

  public constructor(
    private _dbService: DbService,
    private _gameService: GameService,
    private _userService: UserService,
    private _router: Router
  ) {}

  public addRoom(): any {
    this._ROOM.deck = this._gameService.shuffleDeck(this._ROOM.deck);
    this._ROOM.id = Number(new Date());
    this._dbService.addRoom(this._ROOM);
    this._router.navigate([`/game/${this._ROOM.id}`]);
  }

  public enterMultiGame(): any {
    this._router.navigate([`/multigame`]);
  }
}
