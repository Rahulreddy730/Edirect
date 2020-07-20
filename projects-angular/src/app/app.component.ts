import { Component, OnInit } from '@angular/core';
import { AuthService } from './login/auth.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title = 'My Angular App';
  public isAuthenticated: Observable<boolean>;

  constructor(private authService:AuthService) {
   
  }

  async ngOnInit() {
    this.isAuthenticated = this.authService.isLoggedIn();
  }

  logout(){
    this.authService.logout();
    this.isAuthenticated = this.authService.isLoggedIn();
  }

}
