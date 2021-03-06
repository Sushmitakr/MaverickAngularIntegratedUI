// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'sn-category-suggetions',
//   templateUrl: './category-suggetions.component.html',
//   styleUrls: ['./category-suggetions.component.scss']
// })
// export class CategorySuggetionsComponent implements OnInit {
//   public mySentences: Array<string>
//   constructor() { }
//   options = ['OptionA', 'OptionB', 'OptionC'];
//   optionsMap = {
//     OptionA: false,
//     OptionB: false,
//     OptionC: false,
//   };
//   initOptionsMap() {
//     for (var x = 0; x < this.options.length; x++) {
//       this.optionsMap[this.options[x]] = true;
//     }
//   }

//   updateCheckedOptions(option, event) {
//     this.optionsMap[option] = event.target.checked;
//   }

//   updateOptions() {
//     for (var x in this.optionsMap) {
//       if (this.optionsMap[x]) {
//         this.optionsChecked.push(x);
//       }
//     }
//     this.options = this.optionsChecked;
//     this.optionsChecked = [];
//   }

//   optionsChecked = [];
//   addCategory(name) {
//     this.mySentences
//   }
//   ngOnInit() {
//   }
//   selectedCategories() {
//     alert("Selected categories are stored..Login again to continue");
//   }

// }






















import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { cModel } from '../model/cat';
import { ActivatedRoute, Router } from "@angular/router";
import { MatSnackBar } from "@angular/material";

@Component({
  selector: 'sn-category-suggetions',
  templateUrl: './category-suggetions.component.html',
  styleUrls: ['./category-suggetions.component.scss']
})
export class CategorySuggetionsComponent implements OnInit {
  public selectedCategoriesList: cModel[] = [];
  public allCategoriesList: Array<string>
  i = 0;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private snackBar:MatSnackBar
  ) {
    this.i = 0;
  }
  id;
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params["id"];
    })
    this.getAllCategories();
  }
  options = ['OptionA', 'OptionB', 'OptionC'];
  updateCheckedOptions(option1, event) {
    this.selectedCategoriesList[this.i++] = option1;    //storing all the selected casategories
  }
  sendCategories() {
    var resultArray: Array<any> = [] //empty array which we are going to push our selected items, always define types 
    console.log("catlist----->"+this.selectedCategoriesList)
    this.userService.sendSelectedCategories(this.id, this.selectedCategoriesList)
      .subscribe(data => {
        this.allCategoriesList = data;
        console.log("selected categories-->"+data)
      });
  }
  optionsChecked = [];
  selectedCategories() {
   // alert("selected categories are stored..please login to continue");
   this.sendCategories();
   this.router.navigate(['/maverick'])
  }
  getAllCategories() {
    this.userService.getAllCategories()
      .subscribe(data => {
        this.allCategoriesList = data;
      });
  }

  openSnackBar() {
    this.snackBar.open("Topic Added", "", {
      duration: 2000,
    });
  }


}