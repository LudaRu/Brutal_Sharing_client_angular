import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthComponent} from './components/auth/auth.component';
import {UsersComponent} from './components/users/users.component';
import {ProfileComponent} from "./components/profile/profile.component";
import {CatalogComponent} from "./components/catalog/catalog.component";
import {PageComponent} from './components/catalog/page/page.component';


const routes: Routes = [
    { path: 'login', component: AuthComponent},
    { path: 'users', component: UsersComponent},
    { path: 'profile', component: ProfileComponent},
    { path: 'catalog', component: CatalogComponent},
    { path: 'catalog/item', component: PageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
