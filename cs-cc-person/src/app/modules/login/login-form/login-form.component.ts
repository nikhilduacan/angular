import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,  Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  alphanumericPattern = '^[a-zA-Z0-9]*$';
  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required, Validators.pattern(this.alphanumericPattern)],
      password: ['', Validators.required, Validators.pattern(this.alphanumericPattern)]
    });
  }
  isInValidLogin(): boolean {
    return false;
  }

  login() {
    this.router.navigateByUrl('/home');
  }

}
