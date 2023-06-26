import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  templateUrl: './basic-page.component.html',
  styles: [
  ]
})
export class BasicPageComponent {

  // public myForm: FormGroup = new FormGroup({
  //   name: new FormGroup('',),
  //   price: new FormGroup(0,),
  //   inStorage: new FormGroup(0,),
  // });

  public myForm: FormGroup = this.fb.group({
    name: [''],
    price: [0],
    inStorage: [0],
  })

  constructor(
    private fb: FormBuilder
  ) {
  }

  onSave(): void {
    console.log(this.myForm.value)
  }

}
