import {Component, OnInit} from '@angular/core';
import {NavbarComponent} from "../../full-layout/navbar/navbar.component";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-full-layout',
  standalone: true,
  imports: [
    NavbarComponent,
    RouterOutlet
  ],
  templateUrl: './full-layout.component.html',
  styleUrl: './full-layout.component.css'
})
export class FullLayoutComponent implements OnInit{
  ngOnInit(): void {
  }

}
