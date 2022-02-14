import { Component } from '@angular/core';
import {
  FormsModule,
  NgForm,
  NgModel,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'signup-form';
  login(val: any) {
    console.log(val);
  }
}
