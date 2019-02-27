import { Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { GameComponent } from './game/game.component';
import { ErrorComponent } from './error/error.component';
import { MultigameComponent } from './multigame/multigame.component';
import { UserGuard } from './user.guard';
import { LoginComponent } from './login/login.component';
import { RoomComponent } from './room/room.component';

export const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'menu',
        pathMatch: 'full'
    },
    {
        path: 'menu',
        component: MenuComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'game/:id',
        component: GameComponent,
        canActivate: [UserGuard]
    },
    {
        path: 'multigame',
        component: MultigameComponent,
        canActivate: [UserGuard]
    },
    {
        path: 'multigame/room/:id',
        component: RoomComponent,
    },
    {
        path: '**',
        component: ErrorComponent
    }
];