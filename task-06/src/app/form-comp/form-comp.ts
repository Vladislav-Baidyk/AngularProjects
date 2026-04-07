import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-comp',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './form-comp.html',
  styleUrl: './form-comp.css',
})
export class FormComp {
  loginForm = new FormGroup({
    name: new FormControl('',[Validators.required]),
    surname: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required, Validators.email]),
    enquiry: new FormControl(false),
    request: new FormControl(false),
    message: new FormControl('',Validators.required),
    consent: new FormControl(false)
  },
{validators: (group) => this.atleastOneChoice(group) });

  atleastOneChoice(group:AbstractControl){
    const enq = group.get('enquiry')?.value;
    const req = group.get('request')?.value;

    return (enq||req) ? null : { noChoice: true };
  }

  get enquiryStyles(){
    const isSelected = this.loginForm.get('enquiry')?.value;  
    return {
      'border-green-600 bg-green-50 shadow-md ': isSelected,
      'border-gray-200 bg-white  opacity-70': !isSelected
    };
  }
  get requestStyles(){
    const isSelected = this.loginForm.get('request')?.value;  
    return {
      'border-green-600 bg-green-50 shadow-md ': isSelected,
      'border-gray-200 bg-white  opacity-70': !isSelected
    };
  }
  enqClick(){
    const enq = this.loginForm.get('enquiry')?.value;
    this.loginForm.get('enquiry')?.setValue(!enq);
  }
  reqClick(){
    const req = this.loginForm.get('request')?.value;
    this.loginForm.get('request')?.setValue(!req);
  }
  consentClick(){
    const cons = this.loginForm.get('consent')?.value;
    this.loginForm.get('consent')?.setValue(!cons);
  }
    onSubmit(){
      if(this.loginForm.valid){
        console.log(this.loginForm.value)
      }
      else{
        console.log(this.loginForm.errors)
        this.loginForm.markAllAsTouched();
      }
    }
}
