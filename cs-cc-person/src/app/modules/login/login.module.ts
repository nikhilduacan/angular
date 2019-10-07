import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatCardModule, MatInputModule } from '@angular/material';

import { LoginFormComponent } from './login-form/login-form.component';

export const loginRoutes: Routes = [
  {
      path: '',
      component: LoginFormComponent
  },
  {
      path: '**',
      redirectTo: ''
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    RouterModule.forChild(loginRoutes)
  ],
  declarations: [LoginFormComponent]
})
export class LoginModule { }
