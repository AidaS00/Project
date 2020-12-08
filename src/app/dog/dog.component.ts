import { Component,  OnChanges, OnInit} from '@angular/core';
import {DogsharedService} from '../service/dogshared.service';


@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent implements OnChanges, OnInit {
  displayPic = false;

  constructor(private ds: DogsharedService) {
  }

  ngOnChanges(){
    throw new Error("Method not implemented.");
  }
  sharedValue = ["image", "name", "des"];
  dogs : any[];

  ngOnInit(options?: PushSubscriptionOptionsInit): void{
    this.ds.getDogs().subscribe((response) => {
      this.dogs = response;
    }, (error) => {
      console.log("Error Occured:" + error);
    })
  }

}

