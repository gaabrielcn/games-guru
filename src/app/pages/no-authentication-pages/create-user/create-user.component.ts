import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {MatCard, MatCardContent} from "@angular/material/card";
import {MatError, MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {FormAbstract} from "../../../shared/abstract/form-abstract";
import {CrudService} from "../../../shared/services/crud.service";
import {ToastrService} from "ngx-toastr";
import {checkPasswords} from "../../../shared/validators/custom.validators";

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [
    FormsModule,
    MatButton,
    MatCard,
    MatCardContent,
    MatFormField,
    MatInput,
    MatLabel,
    ReactiveFormsModule,
    RouterLink,
    MatError
  ],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent extends FormAbstract implements OnInit{

  constructor(route: ActivatedRoute, crudService: CrudService, router: Router, toast: ToastrService) {
    super(route, crudService, router, toast);
  }
  ngOnInit(): void {
    this.toastMessage = 'Usuário criado com sucesso'
    this.createForm();
  }

  createForm() {
    this.form = new FormGroup({
      user: new FormControl(null, [Validators.email, Validators.required]),
      password: new FormControl(null, [Validators.required]),
      confirmPassword: new FormControl(null, [Validators.required])
    }, { validators: checkPasswords });
  }

}
