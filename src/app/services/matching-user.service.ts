import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { MatchingUsers } from '../model/matchingUser';

@Injectable()
export class MatchingUserService {

  matchingUsers: MatchingUsers;
  constructor(private http: HttpClient) {}


  public getMatchingUsers(): Observable<MatchingUsers[]> {
    //http://172.23.239.185:8080/api/matching/users
    // return this.http.get<MatchingUsers[]>("http://172.23.238.179:8080/maverick/users");
    return this.http.get<MatchingUsers[]>("http://172.23.239.185:8080/maverick/users");
  }
}