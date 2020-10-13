import { Component,  OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements  OnChanges, OnInit{
  cats: any;
  displayPic = false;
  ngOnInit() {    		  console.log('DogComponent:OnInit');  }
  ngOnChanges() {    	  console.log('DogComponent:OnChanges');  }
constructor() {

    this.cats = [{image: "/assets/img/cat2.jpg",name: "Charlie", des: "Male, 3 years"},
      {image: "/assets/img/cat6.jpg", name: "Robinzon", des: "Female, 7 years"},
      {image: "/assets/img/cat3.jpg", name: "Zira", des: "Female, 6 years"},
      {image: "/assets/img/cat4.jpg", name: "Koftochka", des: "Female, 3 month"},
      {image: "/assets/img/cat5.jpg", name: "Meron", des: "Male, 3 month"},
      {image: "/assets/img/cat7.jpg",name: "Nebula", des: "Female, 7 month"}

    ];
  }
}
