import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
  @Input() formConfig: Array<any>;
  form: FormGroup;
  forms: Array<FormGroup> = new Array();
  
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    // this.form = this.createFormGroup();
    for (let index = 0; index < this.formConfig.length; index++) {
      this.forms.push(this.createFormGroup(this.formConfig[index]));
    }
    console.log(this.forms);
  }

  // createFormGroup(): FormGroup {
  //   const formGroup = this.fb.group({});
    
  //   this.formConfig.inputs.forEach((input: { required: any; name: string; }) => {
  //     const validators = input.required ? [Validators.required] : [];
  //     formGroup.addControl(input.name, this.fb.control('', validators));
  //   });
  //   return formGroup;
  // }

  createFormGroup(element:any): FormGroup {
    const fg = this.fb.group({});

    element.inputs.forEach((input: { required: any; name: string }) => {
      const validators = input.required ? [Validators.required] : [];
      fg.addControl(input.name, this.fb.control('', validators));
    });
    return fg;
  }


  onSubmit(index:number) {
    console.log(this.forms[index].value);
  }
}
