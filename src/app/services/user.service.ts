import { Injectable, SystemJsNgModuleLoader } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private readonly _user: TUser = {
    userName: '',
    id: 0,
    playerHand: [],
    userScore: 0, 
  };

  constructor() {}

  public getUser(): string {
    let userName = localStorage.getItem('userNameBJ');
    return userName;
  }

  public setUser(userName): void {
    localStorage.setItem('userNameBJ', userName);
  }

  public getAllUser(): TUser {
    this._user.id = Number(new Date());
    this._user.userName = this.getUser();
    this._user.playerHand = [];
    this._user.userScore = 0;
    return this._user;
  }
}

