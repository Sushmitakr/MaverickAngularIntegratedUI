import { MultiGame } from "./../model/multiplayer.model";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import { Game } from "../model/game.model";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-type": "application/json"
  })
};
@Injectable()
export class GameService {
  // url = "http://172.23.238.185:8080/api/game/";
  // url1 = "http://172.23.238.185:8080/api/game/category/mp";

  // // url = "http://172.23.239.205:8080/api/game/";
  // // url1 = "http://172.23.239.205:8080/api/game/category/mp";

  // game: Game;
  // categoryId: number;
  // topicName: string;
  // constructor(private http: HttpClient) { }

  // public displayGame<Game>() {
  //   return this.http.get("http://172.23.238.185:8080/api/game/games");
  //   // return this.http.get("http://172.23.239.205:8080/api/game/games");

  //   // return this.http.get("url/games");

  //   //   // this.data1=Array.of(restaurants);
  // }

  // public createGame(categoryId: number, topicName: string, game): Observable<Game> {
  //   console.log("Passing data to the gameManager backend ", game);
  //   // return this.http.post<Game>(this.url + "category/${categoryId}/${topicName}", game);
  //   const getUrl = `${this.url}/${categoryId}/${topicName}`;
  //   return this.http.post<Game>(getUrl, game);
  // }

  // public createMultiGame(categoryId: number, topicName: string, multigame): Observable<MultiGame> {
  //   // return this.http.post<Game>(this.url + "category/mp/${categoryId}/${topicName}", game);
  //   const getUrl = `${this.url1}/${categoryId}/${topicName}`;
  //   return this.http.post<MultiGame>(getUrl, multigame)
  // }

  // public saveGame(game): Observable<Game> {
  //   return this.http.post<Game>("http://172.23.238.185:8080/api/game/games", game);
  //   // return this.http.post<Game>("http://172.23.239.205:8080/api/game/games", game);

  // }

  //   url = "http://172.23.238.185:8080/api/game";
  //  url1 = "http://172.23.238.185:8080/api/game/category/mp";

  url = "http://172.23.238.185:8080/api/game";
  url1 = "http://172.23.238.185:8080/api/game/category/mp";
  gameByIdUrl = "http://172.23.238.185:8080/api/game/game1";
  showAllGamesUnderTopicUrl = "http://172.23.238.185:8080/api/game/mp/category";
  deleteUrl = "http://172.23.238.185:8080/api/game/deletegame";
  updateUrl = "http://172.23.238.185:8080/api/game/updategame";

  game: Game;

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  //  public createGame(categoryId, topicName, game): Observable<Game> {
  //    //console.log("Passing data to the gameManager backend ", game);
  //    // return this.http.post<Game>(this.url + "category/${categoryId}/${topicName}", game);
  //    const getUrl = `${this.url}/category/${categoryId}/${topicName}`;
  //    console.log("checking url in single game service ="+getUrl)
  //    return this.http.post<Game>(getUrl, game);
  //  }

  public createGame(categoryId, topicName, game): Observable<Game> {
    console.log("checking categoryId ", categoryId);
    console.log("cheking topicname ", topicName);

    //console.log("Passing data to the gameManager backend ", game);
    // return this.http.post<Game>(this.url + "category/${categoryId}/${topicName}", game);
    const getUrl = this.url + "/category" + "/" + categoryId + "/" + topicName;
    console.log("checking url in single game service =" + getUrl);
    return this.http.post<Game>(getUrl, game);
    // return null;
  }

  public createMultiGame(
    categoryId: number,
    topicName: string,
    multigame
  ): Observable<MultiGame> {
    // return this.http.post<Game>(this.url + "category/mp/${categoryId}/${topicName}", game);
    const getUrl = `${this.url1}/${categoryId}/${topicName}`;
    return this.http.post<MultiGame>(getUrl, multigame);
  }

  public getGames(categoryId: number, topicName: string) {
    console.log("cId----" + categoryId);
    console.log("topicName----" + topicName);

    return this.http.get(
      this.showAllGamesUnderTopicUrl + "/" + categoryId + "/" + topicName
    );
  }

  getGameById(gameId: number): Observable<Game> {
    const getUrl1 = `${this.gameByIdUrl}/${gameId}`;
    return this.http.get<Game>(getUrl1);
  }

  public deleteGame(gameId: any) {
    console.log("delete by id---" + gameId);
    return this.http.delete(this.deleteUrl + "/" + gameId);
  }

  public updateGame(gameId, game): Observable<Game> {
    const getUrl = `${this.updateUrl}/${gameId}`;
    return this.http.put<Game>(getUrl, game);
  }
}
