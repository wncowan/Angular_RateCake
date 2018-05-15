import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) { }
  
  getDessert(){
    return this._http.get('/desserts')
  }

  postDessert(newDessert){
    return this._http.post('/newDessert',newDessert);
  }

  postComment(id:String, newComment){
    return this._http.post('/newComment/'+ id +'',newComment);
  }
  getRatings(id:String){
    console.log("I am in the httpservice for getratings");
    return this._http.get('/dessertRatings/' + id + '');
  }

}
