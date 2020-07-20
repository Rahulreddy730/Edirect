import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material'
import { AuthService } from './auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private authService:AuthService) { }
username: string;
password: string;
  ngOnInit() {
  }
  login() : void {
    if(this.authService.login(this.username,this.password)){
      this.router.navigate([""]);
    }else {
      alert("Invalid credentials");
    }
  }

  
}
