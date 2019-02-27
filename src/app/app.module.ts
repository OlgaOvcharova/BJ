import { FormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { environment } from '../environments/environment';

import { appRoutes } from './app.routes';
import { AppComponent } from './app.component';
import { DbService } from "./services/db.service";
import { ErrorComponent } from './error/error.component';
import { FieldComponent } from './field/field.component';
import { GameService } from './services/game.service';
import { GameComponent } from './game/game.component';
import { MenuComponent } from './menu/menu.component';
import { MultigameComponent } from './multigame/multigame.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { UserGuard } from './user.guard';
import { UserService } from "./services/user.service";
import { LoginComponent } from './login/login.component';
import { RoomComponent } from './room/room.component';



@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    FieldComponent,
    GameComponent,
    MenuComponent,
    MultigameComponent,
    SideBarComponent,
    LoginComponent,
    RoomComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase, 'my-pro-baba'),
    AngularFireDatabaseModule
  ],
  providers: [
    DbService,
    GameService,
    UserGuard,
    UserService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
