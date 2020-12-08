import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dogs } from '../dogs';

@Injectable({
  providedIn: 'root'
})
export class DogsharedService {


  constructor(private http: HttpClient) { }
  url: string = "http://localhost:3000/Dogs/";
  getDogs(){
    return this.http.get<Dogs[]>(this.url);
  }

}
