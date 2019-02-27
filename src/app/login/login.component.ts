import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DEFAULT_VALUE_ACCESSOR } from '@angular/forms/src/directives/default_value_accessor';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  private readonly _user: TUser = {
    userName: '',
    id: 0,
    playerHand: [],
    userScore: 0, 
  };
  
  constructor(
    private _userService: UserService,
    private _router: Router
  ) { }

  ngOnInit() {
  }

  public setUser(): void {
    this._user.id = Number(new Date());
    this._user.userName;
    this._userService.setUser(this._user.userName);
    this._router.navigate(['/menu']);
  }
}
