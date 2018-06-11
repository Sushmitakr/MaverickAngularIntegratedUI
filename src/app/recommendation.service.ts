import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from './services/user.service';
@Injectable()
export class RecommendationService {
 
  public API = 'http://172.23.239.204:8084/api/v1/recommendation/categories';
  // public API = 'http://172.23.238.161:8084/api/v1/recommendation/categories';
  userId:number;
  constructor(private http: HttpClient,private router: Router, private userService: UserService) {
    this.userId=this.userService.getUserId();
    console.log("value ====="+this.userService.getUserId());
  }
  getAll(): Observable<any> {
    console.log(this.API+'/'+this.userId);
    return this.http.get(this.API+'/'+this.userId);
  }
  // get(id: string) {
  //   console.log("9999999999999"+this.userId)
  //   console.log('http://172.23.238.161:8084/api/v1/recommendation/categoryTopics' + this.userId +'/' + id);
  //   return this.http.get('http://172.23.238.161:8084/api/v1/recommendation/categoryGames' +'/' + id);
  // }
  get(id: string) {
    console.log("9999999999999"+this.userId)
    console.log('http://172.23.239.204:8084/api/v1/recommendation/categoryTopics' + this.userId +'/' + id);
    return this.http.get('http://172.23.239.204:8084/api/v1/recommendation/categoryGames' +'/' + id);
  }
  // getAllGames(): Observable<any> {
  //   return this.http.get('http://172.23.238.161:8084/api/v1/recommendation/games/'+this.userId);
  // }
  getAllGames(): Observable<any> {
    return this.http.get('http://172.23.239.204:8084/api/v1/recommendation/games'+'/181');
  }
  // sendGameIdToSingleplayerEngine(id,game_type,game_type_id,topic_id): Observable<any>
  // {
  //   // console.log('http://172.23.239.177:8080/api/v1/details' + '/' + game_type_id +'/181'+id);
  //   return this.http.get('http://172.23.238.182:8080/api/v1/details' + '/'+game_type_id+'/181'+'/'+id);
  // }
  sendGameIdToSingleplayerEngine(id,game_type,game_type_id,topic_id): Observable<any>
  {
    // console.log('http://172.23.239.177:8080/api/v1/details' + '/' + game_type_id +'/181'+id);
    return this.http.get('http://172.23.238.182:8080/api/v1/details' + '/'+game_type_id+'/'+this.userId+'/'+id);
  }
  sendGameIdToMultiplayerEngine(id,game_type,game_type_id,topic_id): Observable<any>
  {
    console.log('hello = 172.23.238.156/api/v1/matching' +'/'+this.userId+'/'+id);
    return this.http.get('172.23.238.156/api/v1/matching' +'/'+this.userId+'/'+id);
  }
  sendGameIdToAdaptiveEngine(id,game_type,game_type_id,topic_id): Observable<any>
  {
    return this.http.get('http://172.23.238.182:8080/api/v1/details' + '/'+id+'/'+this.userId);
  }
  setUserId(userId)
  {
     this.userId=userId;
  }
  getUserId()
  {
    return this.userId;
  }
  sendCar(name)
  {
    this.router.navigate(['/game-by-categoryId',name, this.userId])
  }
}
