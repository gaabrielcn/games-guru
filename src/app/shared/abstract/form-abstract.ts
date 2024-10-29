import {Injectable} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {CrudService} from "../services/crud.service";
import {ToastrService} from "ngx-toastr";
import {ErrorStateMatcher} from "@angular/material/core";
import {FormControl, FormGroupDirective, NgForm} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}



export abstract class FormAbstract{
  public form: any;
  public path: any;
  public redirect: string = '';
  matcher = new MyErrorStateMatcher();
  toastMessage = '';
  constructor(public route: ActivatedRoute, public crudService: CrudService, public router: Router, public toastService: ToastrService) {
    this.route.data.subscribe(data => {
      if(data) {
        this.path = data['routePath'];
      }
    })

  }

  submit() {
    this.markAllAsTouched();
    if(this.form.valid) {
      // TODO deixar esse router e toast aqui até funcionar realmente
      this.toastService.success(`${this.toastMessage}`);
      this.router.navigate([`${this.redirect}`]);
      // this.crudService.post(`${this.path}`, this.form.getRawValue()).subscribe(data => {
      //   this.toastService.success(`${this.toastMessage}`);
      //   this.router.navigate([`${this.redirect}`]);
      // });
    }
  }


  markAllAsTouched(): void {
    Object.keys(this.form.controls).forEach(key => {
      this.form.get(key).markAsTouched();
    });
  }

}
