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
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ReactiveValidationComponent} from "./reactive-form-components/elements/reactive-validation/reactive-validation.component";
import {ReactiveInputComponent} from "./reactive-form-components/elements/reactive-input/reactive-input.component";
import { ReactiveSelectComponent } from './reactive-form-components/elements/reactive-select/reactive-select.component';
import { ReactiveRadioComponent } from './reactive-form-components/elements/reactive-radio/reactive-radio.component';
import {ThemeService} from "./services/theme.service";
import { CatalogComponent } from './components/catalog/catalog.component';
import { ItemComponent } from './components/catalog/item/item.component';
import { PageComponent } from './components/catalog/page/page.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ThingComponent } from './components/thing/thing.component';
import { EditComponent } from './components/thing/edit/edit.component';

@NgModule({
  declarations: [
      ReactiveValidationComponent,
      ReactiveInputComponent,
    AppComponent,
    AuthComponent,
    UsersComponent,
    ProfileComponent,
    FooterComponent,
    ReactiveSelectComponent,
    ReactiveRadioComponent,
    CatalogComponent,
    ItemComponent,
    PageComponent,
    ThingComponent,
    EditComponent,
  ],
  imports: [
      NgbModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
      ReactiveFormsModule,
      FormsModule,
      ScrollingModule,
  ],
  providers: [
      WINDOW_PROVIDERS,
    ThemeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
