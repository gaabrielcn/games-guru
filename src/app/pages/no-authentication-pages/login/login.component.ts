import {Component, OnInit} from '@angular/core';
import {MatCard, MatCardContent} from "@angular/material/card";
import {FormAbstract} from "../../../shared/abstract/form-abstract";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatFormField} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {CrudService} from "../../../shared/services/crud.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    ReactiveFormsModule,
    MatFormField,
    MatInputModule,
    MatButton,
    RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent extends FormAbstract implements OnInit{

  constructor(route: ActivatedRoute, crudService: CrudService, router: Router, toast: ToastrService) {
    super(route, crudService, router, toast);
  }
  ngOnInit(): void {
    this.toastMessage = 'Login feito com sucesso'
    this.createForm();
  }

  createForm() {
    this.form = new FormGroup({
      user: new FormControl(null, [Validators.email, Validators.required]),
      password: new FormControl(null, [Validators.required])
    });
  }

}
