import { Component, OnInit} from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  newDessert: any;
  // newComment: any;
  displayDesserts;
  oneRatings;
  title = 'Rate my Dessert';
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.newDessert = { name: "", image: "" }
    this.getDessertFromService();
    // this.newComment = { rating:"", comment: ""}
  }

  onCreateDessertClick() {
    let dessertObservable = this._httpService.postDessert(this.newDessert)
    dessertObservable.subscribe(data => {
      console.log("Created a dessert!", data);
      this.newDessert ={name:"", image:""};
    })
  }

getDessertFromService() {
  let getDessertObservable = this._httpService.getDessert()
  getDessertObservable.subscribe(data =>{
    console.log("Displayed all desserts!", data);
    this.displayDesserts = data;
  })
}

onGetOneRatingClick(id){
  console.log("I am in the dessertcomponent.ts")
  console.log(id)
  let ratingObservable = this._httpService.getRatings(id)
  ratingObservable.subscribe(data => {
    console.log("Grab one ratings", data);
    this.oneRatings = data; 
  })
}

}
