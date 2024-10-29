import { Routes } from '@angular/router';
import {HomeComponent} from "./pages/full-layout/home/home.component";
import {ListDataModel} from "./shared/models/list-data.model";
import {GameItemComponent} from "./pages/full-layout/home/game-item/game-item.component";
import {ItemDataModel} from "./shared/models/item-data.model";
import {ItemDataResolver} from "./shared/resolvers/item-data.resolver";
import {LoginComponent} from "./pages/no-authentication-pages/login/login.component";
import {CreateUserComponent} from "./pages/no-authentication-pages/create-user/create-user.component";
import {FullLayoutComponent} from "./pages/full-layout/full-layout.component";

export const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '',
    component: FullLayoutComponent,
    children: [
      {path: '', component: HomeComponent, data: new ListDataModel('games')},
      {path: 'game/:id', component: GameItemComponent, data: new ItemDataModel('games'), resolve: {data: ItemDataResolver}}
    ]
  },
  {path: 'login', component: LoginComponent, data: new ItemDataModel('login')},
  {path: 'create/user', component: CreateUserComponent, data: new ItemDataModel('create-user')},
];
