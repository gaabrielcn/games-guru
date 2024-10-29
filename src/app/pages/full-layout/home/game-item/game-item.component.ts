import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FormAbstract} from "../../../../shared/abstract/form-abstract";
import {FormGroup} from "@angular/forms";
import {MatCard, MatCardContent} from "@angular/material/card";
import {NgxSkeletonLoaderModule} from "ngx-skeleton-loader";

@Component({
  selector: 'app-game-item',
  standalone: true,
    imports: [
        MatCard,
        MatCardContent,
        NgxSkeletonLoaderModule
    ],
  templateUrl: './game-item.component.html',
  styleUrl: './game-item.component.css'
})
export class GameItemComponent implements OnInit{

  gameData: any = null
  skeletonLoader = true;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      if(data) {
        this.skeletonLoader = false;
        this.gameData = data['data']['games'].shift();
      }
    });
  }

}
