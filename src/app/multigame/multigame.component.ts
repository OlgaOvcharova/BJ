import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { DbService } from '../services/db.service';
import { GameService } from '../services/game.service';
import { ActivatedRoute, Router } from '@angular/router';
import { pluck, switchMap, takeUntil, filter } from 'rxjs/operators';
import { UserService } from '../services/user.service';
import { User } from 'firebase';

@Component({
  selector: 'app-multigame',
  templateUrl: './multigame.component.html',
  styleUrls: ['./multigame.component.css']
})
export class MultigameComponent implements OnInit {

  public room: TMultiRoom = {
    id: 0,
    deck: this._gameService.getDeck(),
    players: [] = [],
    maxPlayers: 0,
    result: {
      isShownButtons: false,
      winner: '',
      score: [],
      isShownCards: false
    },
  };

  public rooms: TMultiRoom[] = [];
  //private _destroy$ = new Subject();
  public roomId: number = null;
  
  public constructor(
    private _dbService: DbService,
    private _gameService: GameService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService
  ) {}

  ngOnInit() {
    this._dbService.getRooms().subscribe((rooms) => {
      this.rooms = rooms;
      this.rooms.forEach((room) => {
        if (room.players) {
          room.players = Object.values(room.players);
        }
      })

    })
  }

  public addMultiRoom(): any {
    debugger
    this.room.maxPlayers;
    this.room.deck = this._gameService.shuffleDeck(this.room.deck);
    this.room.id = Number(new Date());
    this._dbService.addMultiRoom(this.room);
  }

  public enterRoom(room: TMultiRoom): any {
    debugger
    room.players = [];
    room.players.push(this._userService.getAllUser());
    this._dbService.enterMultiRoom(room);
    this._router.navigate([`/multigame/room/${room.id}`]);
  }


  public deleteRoom(id: number): any {
    this._dbService.deleteRoom(id); 
  }

 

  // public closedRoom(): any {
  //   this._dbService.closedRoom(this.room.id).subscribe(room => {
  //     room.closed = !room.closed;
  //   })
  // }

  // ngOnDestroy(): void {
  //   this._destroy$.next();
  // }
}
