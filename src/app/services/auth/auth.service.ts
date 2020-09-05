import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/app/classes/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Variable to store the currentUsersSubject BehaviorSubject
  private currentUserSubject: BehaviorSubject<any>;
  // Variable to store the currentUser observable
  public currentUser: Observable<any>;

  constructor(private http: HttpClient, private router: Router, private httpClient: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  // Validate if the currentUserSubject exists, if exists get its value.
  public get currentUserValue() {
    if (this.currentUserSubject && this.isAuthenticated()) {
      return this.currentUserSubject.value;
    } else {
      this.currentUserSubject.next(null);
      return false;
    }
  }

  // Verifies if user is logged in
  isAuthenticated(): boolean {
    const token = localStorage.getItem('currentUser');
    if (token) {
      return true;
    }
  }

  /**
  * login - For the test, store the object on local storage
  * @param username Username of the user
  * @param password Password of the user
  */
  async login(username: string, password: string) {
    // Mockear una api basica
    return new Promise((resolve,reject) => {  
      this.getJSON('./assets/mocks/users_mock.json').subscribe((res)=>{
        let result = res['result'].filter(user => user.username == username && user.password == password);
        if (result[0] && result[0]['token']) {
          const user = new User(result[0]);
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user); 
        }
        resolve(result[0]);
      },(err) => {
        reject(err);
      });
    });
  }

  /**
  * getJSON - Get a mock JSON data
  * @param locationFile - Location of JSON file to get data
  */
  getJSON(locationFile: string): Observable<any> {
    return this.http.get(locationFile);
  }


  /**
  * logout - Method to remove the credentials on local storage and redirect to base URL
 * @return {boolean}
  */
  logout(): boolean {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      localStorage.removeItem('currentUser');
      this.currentUserSubject.next(null);
      this.router.navigateByUrl('/');
      return true;
    }
  }



}
