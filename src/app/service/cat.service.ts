import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cats } from '../cats';

@Injectable({
  providedIn: 'root'
})
export class CatService {


  constructor(private http: HttpClient) { }
  url: string = "http://localhost:3000/Cats/";
  getCats(){
    return this.http.get<Cats[]>(this.url);
  }

}
