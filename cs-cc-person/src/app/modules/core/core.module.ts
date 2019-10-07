import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatCardModule, MatInputModule, MatButtonModule, MatFormFieldModule } from '@angular/material';


export const appRoutes: Routes = [
    {
        path: 'login',
        loadChildren: '../../modules/login/login.module#LoginModule'
    },
    {
        path: 'home',
        loadChildren: '../../modules/home/home.module#HomeModule',
    },
    { path: '**', redirectTo: 'login' }
  ];

@NgModule({
    imports: [
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        MatFormFieldModule,
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
    ],
    providers: [
    ]
})
export class CoreModule { }
