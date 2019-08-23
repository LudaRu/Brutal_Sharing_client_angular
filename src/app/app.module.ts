import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './components/auth/auth.component';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { UsersComponent } from './components/users/users.component';
import { ProfileComponent } from './components/profile/profile.component';
import {WINDOW_PROVIDERS} from './services/window.service';
import { FooterComponent } from './components/footer/footer.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    UsersComponent,
    ProfileComponent,
    FooterComponent,
  ],
  imports: [
      NgbModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
      ReactiveFormsModule,
  ],
  providers: [WINDOW_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
