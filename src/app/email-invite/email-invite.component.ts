import { Component, OnInit } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';

@Component({
  selector: 'email-invite',
  templateUrl: './email-invite.component.html',
  styleUrls: ['./email-invite.component.scss']
})
export class EmailInviteComponent implements OnInit {
  
  EmailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  constructor() { }

  ngOnInit() {
  }

  HandleEmailInvite(email: string): void {
    alert(email);
  }

}
