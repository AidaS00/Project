import { Injectable } from '@angular/core';
import {Dogs} from '../dogs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChilddogService {

sharedValue:any;
  constructor(private http: HttpClient) { }
  url: string = "http://localhost:3000/Childdog/";
  getDogs(){
    return this.http.get<Dogs[]>(this.url);
  }

}

