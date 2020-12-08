import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Cats} from '../cats';

@Injectable({
  providedIn: 'root'
})
export class ChildcatService {
  sharedValue: any;
  constructor(private http: HttpClient) { }
  url: string = "http://localhost:3000/Childcat/";
  getCats(){
    return this.http.get<Cats[]>(this.url);
  }
}
