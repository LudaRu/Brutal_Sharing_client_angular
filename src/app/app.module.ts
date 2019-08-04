import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import {HttpClientModule} from '@angular/common/http';

import {Routes, RouterModule} from '@angular/router';

const appRoutes: Routes = [
  // { path: '', component: HomeComponent},
  // { path: 'about', component: AboutComponent},
  // { path: '**', component: NotFoundComponent }
  // { path: '**', component: NotFoundComponent }
  // { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
