import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {Routes, RouterModule} from '@angular/router';
import { UsersComponent } from './users/users.component';

const appRoutes: Routes = [
    { path: 'login', component: AuthComponent},
    { path: 'users', component: UsersComponent},
    { path: '/', component: AppComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    UsersComponent
  ],
  imports: [
      NgbModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
