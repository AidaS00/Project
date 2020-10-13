import { Component,  OnChanges, OnInit} from '@angular/core';


@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent implements OnChanges, OnInit {
  dogs: any;
  displayPic = false;
  ngOnInit() {    		  console.log('DogComponent:OnInit');  }
  ngOnChanges() {    	  console.log('DogComponent:OnChanges');  }
  constructor() {

    this.dogs = [
      {image: "/assets/img/dog2.jpg", name: "Charlie", des: "Male, 3 years old"},
      {image: "/assets/img/dog1.jpg", name: "Luna", des: "Female, 3 years old"},
      {image: "/assets/img/dog3.jpg", name: "Bolik", des: "Male, 2,5 years old"},
      {image: "/assets/img/dog4.jpg", name: "Liza", des: "Female, 2,5 years old"},
      {image: "/assets/img/dog5.jpg", name: "Lana", des: "Female, 3 years old"},
      {image: "/assets/img/dog6.jpg", name: "Akela", des: "Male, 2,5 years old"},

    ];
  }
}
