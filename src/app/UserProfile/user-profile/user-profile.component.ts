import { Component, OnInit, Inject, Input, NgModule } from "@angular/core";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { FormsModule } from "@angular/forms";
import { NgModel } from "@angular/forms";
import { UserProfileService } from "../../services/user-profile.service";
import {
  HttpClient,
  HttpHeaders,
  HttpClientModule
} from "@angular/common/http";
import { User } from "../../model/UserProfile";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "sn-user-profile",
  templateUrl: "./user-profile.component.html",
  styleUrls: ["./user-profile.component.scss"]
})
export class UserProfileComponent implements OnInit {
  //sessionStorage properties allow to save key/value pairs in a web browser
  email = sessionStorage.getItem("userEmail");
  uId: any;
  user: User[][];
  testUser: any;
  totalDataNumber: number = 0;
  u = this.userService.getById;
  i: number;
  j: number;
  dataLength: number;
  prcent: number;
  counter: number=0;
  //As the constructor is initialised by the JavaScript engine, and TypeScript allows us
  //to tell Angular what dependencies we require to be mapped against a specific property
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient,
    private userService: UserProfileService
  ) {}

  //as user profile page loads, it fetches data with respect to that email (Unique ID here).
  ngOnInit() {
    this.getUserByEmail(this.email);
  }

  //functionality of fetching user data with respect to that email (Unique ID here).
  getUserByEmail(email) {
    this.userService.getById(email).subscribe(data => {
      this.user = Array.of(data);
      this.testUser = data;
      // this.dataLength = user[0]
      for (this.i = 0; this.i < this.user.length; this.i++) {
        var keys = Object.keys(this.user[0]);
        var len = keys.length;
        var val = Object.values(this.user[0]);
        console.log("values------------------>>>", val);
        console.log("Length Of Object Array", len);
        // if (typeof this.user[0][this.i] != null) {
        //   console.log("user data on count --->", typeof this.user[this.i]);
        //   this.counter;
        //   console.log("Counter still-----> ", this.counter);
        // } else {
        //   this.counter = this.counter + 1;
        // }
        // console.log("Counter number ----->", this.counter);
        for (this.j = 0; this.j < val.length; this.j++) {
          if (val[this.j] == undefined ) {
            this.counter = this.counter + 1;
            console.log("  Null Value -- > > ", val[this.j]);
          }
        }
        this.counter;
        console.log("Number on counter ----> ", this.counter);
        this.prcent = Math.round((len - this.counter) / len * 100);
        console.log("percentage", this.prcent);
      }
      console.log("test data===" + this.testUser.password);
    });
  }
}
