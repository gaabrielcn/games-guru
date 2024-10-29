import {Injectable} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {CrudService} from "../services/crud.service";
import {FormGroup} from "@angular/forms";
import {ListDataModel} from "../models/list-Page.model";

@Injectable({
  providedIn: 'root'
})
export abstract class ListAbstract {
  rowData: any = [];
  params: { [key: string]: string } | null = null;
  routePath: string = '';
  page: ListDataModel = new ListDataModel();
  valueKey = '';
  skeletonLoader = false;
  skeletonLoaderoption = false;
  form: any;

  constructor(private route: ActivatedRoute, private crudService: CrudService) {
    this.route.data.subscribe(data => {
      this.routePath = data['routePath'];
    });
  }

  init() {
    this.onSetPage();
  }

  onSetPage() {
    if(this.skeletonLoaderoption) {
      this.skeletonLoader = true;
    }
      this.crudService.get(this.routePath, null, Object.assign({offSet: this.page.numberPage}, this.params, {limit: this.page.limit})).subscribe((data: any) => {

        if(this.skeletonLoaderoption) {
          this.skeletonLoader = false;
        }
        this.rowData = [...(this.valueKey != '' ? data[this.valueKey] : data), ...this.rowData];

      });
  }

  refresh() {
    this.page.numberPage = 0;
    this.page.limit = 10;
    this.rowData = [];
   this.onSetPage();
  }

}
