import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { MaterialModule } from '../material/material.module';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    AuthenticationRoutingModule,
    TextMaskModule,
    MaterialModule,

  ],
  declarations: [
    LoginComponent
  ],
  providers: [
  ]
})
export class AuthenticationModule { }
