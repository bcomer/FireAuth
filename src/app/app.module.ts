import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material/material.module';
import { EmailInviteComponent } from './email-invite/email-invite.component';
import { ErrorStateMatcher } from '@angular/material';
import { GlobalErrorMatcher } from './error-matcher/global-error-matcher';

@NgModule({
  declarations: [
    AppComponent,
    EmailInviteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule, 
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: ErrorStateMatcher, useClass: GlobalErrorMatcher}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
