import { Component } from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {MatButton, MatFabButton, MatIconButton, MatMiniFabButton} from "@angular/material/button";
import {navigationRoutes} from "../navigation-routes";
import {NavigationHoutesInterface} from "../../shared/interface/navigation-houtes.interface";
import {RouterLink} from "@angular/router";
import {MatIcon} from "@angular/material/icon";
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatToolbar,
    MatButton,
    RouterLink,
    MatIcon,
    MatIconButton,
    MatMiniFabButton,
    MatMenu,
    MatMenuTrigger,
    MatMenuItem,
    MatFabButton
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  navigationRoutes: NavigationHoutesInterface[] = navigationRoutes;
}
