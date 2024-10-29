import {Component, inject, OnInit} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatFormField} from "@angular/material/form-field";
import {FormAbstract} from "../../../../shared/abstract/form-abstract";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {CrudService} from "../../../../shared/services/crud.service";
import {ToastrService} from "ngx-toastr";
import {MatInput} from "@angular/material/input";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatOption, MatSelect, MatSelectModule} from "@angular/material/select";
import {
  MAT_DIALOG_DATA, MatDialog,
  MatDialogActions,
  MatDialogClose, MatDialogContainer,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";
import {NgxSkeletonLoaderModule} from "ngx-skeleton-loader";

@Component({
  selector: 'app-modal-home-filter',
  standalone: true,
  imports: [
    MatButton,
    MatFormField,
    MatInput,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatDialogContainer,
    RouterLink,
    NgxSkeletonLoaderModule
  ],
  templateUrl: './modal-home-filter.component.html',
  styleUrl: './modal-home-filter.component.css'
})
export class ModalHomeFilterComponent extends FormAbstract implements OnInit{
  readonly dialogRef = inject(MatDialogRef<ModalHomeFilterComponent>);
  readonly data = inject(MAT_DIALOG_DATA);
  genres = [];
  platform = [];
  skeletonLoader = true;

  constructor(route: ActivatedRoute, crudService: CrudService, router: Router, toast: ToastrService) {
    super(route, crudService, router, toast);
    this.crudService.get('platforms').subscribe((platform: any )=> {
      this.platform = platform['platforms'];
      setTimeout(() => {
        this.crudService.get('genres').subscribe((gender: any) => {
          this.genres = gender['genres'];
          this.form.patchValue(this.data.form.value);
          this.skeletonLoader = false;
        });
      }, 1000);

    });

  }

  ngOnInit() {
    this.createForm();
  }

  createForm(){
    this.form = new FormGroup({
      genre: new FormControl(null, [Validators.required]),
      platform: new FormControl(null, [Validators.required]),
    });
  }
  closed() {
    this.dialogRef.close();
  }


  override submit() {
    if(this.form.valid) {
      this.dialogRef.close(this.form);
    }
  }
}
