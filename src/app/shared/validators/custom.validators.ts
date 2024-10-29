
import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export const checkPasswords: ValidatorFn = (group: AbstractControl):  ValidationErrors | null => {
  if(group.get('password')!.value !== group.get('confirmPassword')!.value) {
    group.get('confirmPassword')!.setErrors({notSame: true});
  }

  return null;
}
