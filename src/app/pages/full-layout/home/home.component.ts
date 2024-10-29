import {Component, OnInit} from '@angular/core';
import {CrudService} from "../../../shared/services/crud.service";
import {MatCard, MatCardContent, MatCardFooter} from "@angular/material/card";
import {ListAbstract} from "../../../shared/abstract/list-abstract";
import {ActivatedRoute, Router} from "@angular/router";
import {MatPaginator} from "@angular/material/paginator";
import {NgxSkeletonLoaderModule} from "ngx-skeleton-loader";
import {MatIcon} from "@angular/material/icon";
import {MatFabButton} from "@angular/material/button";
import {MatDialog} from "@angular/material/dialog";
import {ModalHomeFilterComponent} from "./modal-home-filter/modal-home-filter.component";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatPaginator,
    MatCardFooter,
    NgxSkeletonLoaderModule,
    MatIcon,
    MatFabButton
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent extends ListAbstract implements OnInit {

  constructor(route: ActivatedRoute, crudService: CrudService, private router: Router, private dialog: MatDialog) {
    super(route, crudService);
  }

  ngOnInit(): void {
    this.valueKey = 'games';
    this.skeletonLoaderoption = true;
    this.init();
    this.createForm();
  }

  createForm(){
    this.form = new FormGroup({
      genre: new FormControl(),
      platform: new FormControl(),
    });
  }

  onScroll(event: any) {
    if(Math.floor(event.target.scrollTop) === ((event.target.scrollHeight - event.target.offsetHeight) - 1) || Math.floor(event.target.scrollTop) === (event.target.scrollHeight - event.target.offsetHeight)) {
      this.page.numberPage = this.page.numberPage + 1;
      this.onSetPage();
    }
  }

  directGameItem(gamerId: string) {
    this.router.navigate([`/game/${gamerId}`]);
  }



  openDialog(): void {
    const dialogRef = this.dialog.open(ModalHomeFilterComponent, {
      data: {form: this.form}
    });

    dialogRef.afterClosed().subscribe(form => {
      if(form) {
      this.form = form;
      this.params = form.getRawValue();
      this.refresh();
      }
    });
  }


}
