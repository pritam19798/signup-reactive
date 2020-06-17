import { FormGroup } from '@angular/forms';

export function passworChecker(
    control:string,
    compareControl:string
){
    return (formGroup: FormGroup)=>{
        const password=formGroup.controls[control];
        const confirmPassword=formGroup.controls[compareControl];
        if (password.value!==confirmPassword.value) {
            confirmPassword.setErrors({mustMatch:true})
        }
        else{
            confirmPassword.setErrors(null)
        }
    }

}