import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  name: FormControl;
  email: FormControl;
  password1: FormControl;
  password2: FormControl;
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.name = new FormControl('', [
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(20),
    ]);

    this.email = new FormControl('', [
      Validators.required,
      Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
    ]);

    this.password1 = new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(20),
    ]);

    this.password2 = new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(20),
    ]);

    this.registerForm = this.formBuilder.group({
      name: this.name,
      email: this.email,
      password1: this.password1,
      password2: this.password2,
    });
  }

  registro() {
    if (this.registerForm.invalid) {
      return;
    }

    if (
      this.registerForm.get('password1')?.value !=
      this.registerForm.get('password2')?.value
    ) {
    }
    this.router.navigateByUrl('');
  }
}
