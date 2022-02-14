import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  MinLengthValidator,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css'],
})
export class TemplateComponent implements OnInit {
  constructor() {}
  formsign: any;
  ngOnInit(): void {
    this.formsign = new FormGroup({
      fname: new FormControl('', [Validators.minLength(1)]),
      lname: new FormControl('', [Validators.minLength(1)]),
      mailid: new FormControl('', [Validators.required, Validators.email]),
      pass: new FormControl('', [Validators.minLength(1)]),
    });
  }
  login(val: any) {
    console.log(val);
  }
  get fname(): any {
    return this.formsign.get('fname');
  }
  get lname(): any {
    return this.formsign.get('lname');
  }
  get mailid(): any {
    return this.formsign.get('mailid');
  }
  get pass(): any {
    return this.formsign.get('pass');
  }
}
