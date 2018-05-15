import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-desserts',
  templateUrl: './desserts.component.html',
  styleUrls: ['./desserts.component.css']
})

export class DessertsComponent implements OnInit {
displayDesserts;
newComment: any;
oneRatings;
@Input() showDessert: any;
@Output() myEvent = new EventEmitter();

  constructor(private _httpService: HttpService) {
    this.newComment = { rating:"", comment: ""};
   }

  ngOnInit() {
  }

   onGetOneRatingClick(id){
     this.myEvent.emit(id);
    
  }

  onCreateCommentClick(id){
    let commentObservable = this._httpService.postComment(id, this.newComment)
    console.log("this is in the app.component.ts", this.newComment, id);
    commentObservable.subscribe(data => {
      console.log("Created a new comment", data);
      this.newComment = {rating:"", comment:""};
    })
  }
}

