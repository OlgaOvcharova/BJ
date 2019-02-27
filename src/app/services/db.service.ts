import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs';


@Injectable()
export class DbService {

  constructor(
    private _db: AngularFireDatabase
  ) {}

  public addRoom(room: TRoom): void {
   this._db.object('/').set({[room.id]: room});
  }

  public getRoom(id: number): Observable<TRoom> {
    return this._db.object<TRoom>(`/${id}`).valueChanges();
  }

  public closedRoom(id: number): any {
    return this._db.object<TRoom>(`/${id}`).valueChanges();
  }

  
  public getRooms(): Observable<TMultiRoom[]> {
    return this._db.list<TMultiRoom>(`/rooms`).valueChanges();
  }
  
  public addMultiRoom(room: TMultiRoom): void {
    this._db.object(`rooms/${room.id}`).update(room);
  }

  public enterMultiRoom(room: TMultiRoom): void {
    this._db.object(`rooms/${room.id}`).update(room);
  }

  public getMultiRoom(id: number): Observable<TMultiRoom> {
    return this._db.object<TMultiRoom>(`rooms/${id}`).valueChanges();
  }

  public deleteRoom(id: number): any {
    return this._db.list(`rooms/${id}`).remove();
  }

  public updateRoom(): any {
    return this._db.list(`rooms/`).stateChanges();
  }

  public addUser(user: TUser): void {
    this._db.object(`/players/`).set({[user.id]: user});
  }

  public getUser(user: TUser): Observable<TUser> {
    return this._db.object<TUser>(`players/${user.id}`).valueChanges();
  }

  public removeUser(userIndex, roomId) {
    this._db.list(`rooms/${roomId}/players`).remove(userIndex);
    return this._db.list;
  }
}
