import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";
import {
  HttpClient,
  HttpHeaders,
  HttpClientModule
} from "@angular/common/http";
import { User } from ".././model/UserProfile";
import { UserUpdate } from ".././model/UserProfileUpdate";

@Injectable()
export class UserProfileService {
  constructor(private http: HttpClient) {}

  mail: string;
  //userEmail: string;

  // getById(userEmail: string): Observable<User[]> {
  //   // console.log("Printed here email"+userEmail);
  //   return this.http.get<User[]>("http://172.23.238.166:8080/api/v1/getUserByEmail/" + userEmail);
  // }

  getById(userEmail: string): Observable<User[]> {
    console.log("Printed here email......>>>>>>>", userEmail);
    return this.http.get<User[]>(
      "http://172.23.239.189:8080/api/v1/getUserByEmail/" + userEmail
    );
  }

  // getById(userId: number) {
  //   return this.http.get('http://172.23.239.189:8080/api/v1/getUser/' + userId).map((res: Response) => {
  //     console.log("inside service ");
  //     return res.json();
  //   });
  // }

  public updateUser(user: UserUpdate): Observable<UserUpdate> {
    alert(user.userName);
    this.mail = user.email;
    console.log("print krdiya .....", this.mail);
    return this.http.put<UserUpdate>(
      "http://172.23.239.189:8080/api/v1/updateUser/" + this.mail,
      user
    );
  }

  // public updateUser(user: UserUpdate): Observable<UserUpdate> {
  //   alert(user.userName);
  //   this.mail = user.email;
  //   console.log("print krdiya .....", this.mail);
  //   return this.http.put<UserUpdate>("http://172.23.238.166:8080/api/v1/updateUser/" + this.mail, user);
  // }
}
