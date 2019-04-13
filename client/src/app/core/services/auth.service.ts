import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly BASE_URL = 'http://localhost:9999/';

  constructor(
    private http: HttpClient
  ) { }


  get token() {
    return localStorage.getItem('token');
  }

  get username() {
    return localStorage.getItem('username');
  }

  get id () {
    return localStorage.getItem('userId');
  }

  get status () {
    return localStorage.getItem('status');
  }

  signUp(body: Object) {
    return this.http.post(this.BASE_URL + 'signup', body);
  }

  signIn(body: Object) {
    return this.http.post(this.BASE_URL + 'signin', body);
  }

  getUserProfile(id) {
    return this.http.get(this.BASE_URL + 'profile/' + id);
  }

  editUserProfile(id, body){
    return this.http.post(this.BASE_URL + 'profile/edit/' + id, body);
  }

  getAvailableUsers(id){
    return this.http.get(this.BASE_URL + 'users/available/' + id)
  }

  isAuthenticated() {
    return this.token !== null;
  }

  isAnonymous() {
    return this.token === null;
  }

  isAdmin() {
    return localStorage.getItem('isAdmin') === 'true';
  }

  saveUserInfo(res: Object) {
    console.log(res);
    localStorage.setItem('username', res['username']);
    localStorage.setItem('token', res['token']);
    localStorage.setItem('userId', res['userId']);
    localStorage.setItem('isAdmin', res['isAdmin']);
    localStorage.setItem('status', res['status']);
  }

}
