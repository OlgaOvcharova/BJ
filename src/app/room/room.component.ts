import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { DbService } from '../services/db.service';
import { GameService } from '../services/game.service';
import { ActivatedRoute, Router } from '@angular/router';
import { pluck, switchMap, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  public room: TMultiRoom; 
  // = {
  //   players: [],
  //   maxPlayers: null,
  //   id: null,
  //   deck: [],
  //   result: null  
  // }

  public result: TResult = {
      isShownButtons: false,
      winner: '',
      score: [],
      isShownCards: false
  };

  public bot: TUser = {
    id: 0,
    userName: '',
    playerHand: [],
    userScore: 0
  }

  public myId ;
  public players;

  private readonly _WIN_SCORE: number = 21;
  private readonly _ENOUGH_SCORE: number = 15;
  private _destroy$ = new Subject();
 
  public constructor(
    private _dbService: DbService,
    private _gameService: GameService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }
  

  ngOnInit() {
    this._route.params.pipe(
      pluck('id'),
      switchMap((id: number) => {
        
        return this._dbService.getMultiRoom(id)
      }, 
      ),takeUntil(this._destroy$))
      .subscribe((room) => {
        console.log(room);
        debugger
        this.room = room
        if (!this.room) {
          this.room.players = [];
        }
        //this.players = Object.values(this.room.players);
      });
     
  }



  ngOnDestroy(): void {
    this._destroy$.next();
    this._dbService.updateRoom();

    //this.myId = Object.values(this.room.players).findIndex((player)=> player.userName === localStorage.getItem('userNameBJ')); 
    this._dbService.removeUser(this.myId, this.room.id);
    this._destroy$.complete();
    this._router.navigate([`/multigame`]);
  }


  addBot(): TMultiRoom {
    this.bot.id = Number(new Date());
    this.bot.userName = 'Bottik';
    //this.room.players.push(this.bot);
    this._dbService.getMultiRoom(this.room.players.push(this.bot));
    this._dbService.updateRoom();
    return this.room;
  }
  

}
