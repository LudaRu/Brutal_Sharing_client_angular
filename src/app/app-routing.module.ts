import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthComponent} from './auth/auth.component';
import {UsersComponent} from './users/users.component';
import {ProfileComponent} from "./profile/profile.component";


const routes: Routes = [
    { path: 'login', component: AuthComponent},
    { path: 'users', component: UsersComponent},
    { path: 'profile', component: ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
