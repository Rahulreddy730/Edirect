import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";

@Injectable()
export class AuthService {
  isLoginSubject = new BehaviorSubject<boolean>(this.hasToken());

  /**
   * if we have token the user is loggedIn
   * @returns {boolean}
   */
  private hasToken() : boolean {
    return !!localStorage.getItem('username');
  }

  login(username,password) : boolean {
    if(username == 'admin' && password == 'admin'){
        localStorage.setItem('username', JSON.stringify(username));
        return true;
        this.isLoginSubject.next(true);
     }
    }

/**
* Log out the user then tell all the subscribers about the new status
*/
logout() : void {
    console.log("logout")
    localStorage.removeItem('username');
    this.isLoginSubject.next(false);
  }

  /**
*
* @returns {Observable<T>}
*/
isLoggedIn() : Observable<boolean> {
    return this.isLoginSubject.asObservable();
   }
}