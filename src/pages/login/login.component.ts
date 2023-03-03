import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  constructor(private router: Router) {}

  hide: boolean = true;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl("",[Validators.required]),
      password: new FormControl('',[Validators.required]),
    });
  }

  // this.createIssueForm = new FormGroup({
  //   project: new FormControl('', [Validators.required]),
  //   issueName: new FormControl('', [
  //     Validators.required,
  //     Validators.maxLength(10),
  //   ]),
  //   issueType: new FormControl('', [Validators.required]),
  //   issuePriority: new FormControl('', [Validators.required]),
  // });

  readonly loginUrl = 'api/Account/Login';

  submit() {

  }

  reloadPage() {
    window.location.reload();
  }

}
