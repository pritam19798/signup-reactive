import { FormGroup } from '@angular/forms';

export function passworChecker(
    control:string,
    compareControl:string
){
    return (formGroup: FormGroup)=>{
        const password=formGroup.controls[control];
        const confirmPassword=formGroup.controls[compareControl];
        if (confirmPassword.errors && !confirmPassword.errors.mustMatch) {
            // return if another validator has already found an error on the confirmPassword
            return;
        }
        if (password.value!==confirmPassword.value) {

            confirmPassword.setErrors({mustMatch:true})
        }
        else{
            confirmPassword.setErrors(null)
        }
        
    }

}