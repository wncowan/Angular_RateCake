import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ratingdetails',
  templateUrl: './ratingdetails.component.html',
  styleUrls: ['./ratingdetails.component.css']
})
export class RatingdetailsComponent implements OnInit {
  @Input() ratingToShow: any;
  
 

  constructor() { }
  ngOnInit() {
  }
}
