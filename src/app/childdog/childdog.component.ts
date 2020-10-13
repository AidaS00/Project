import { Component, OnInit, OnChanges, Input} from '@angular/core';

@Component({
  selector: 'app-childdog',
  templateUrl: './childdog.component.html',
  styleUrls: ['./childdog.component.css']
})
export class ChilddogComponent implements OnInit, OnChanges{
  dogs: any;
  @Input()
  value = 'dogpic';
  ngOnInit() {    		  console.log('DogComponent:OnInit');  }
  ngOnChanges() {    	  console.log('DogComponent:OnChanges');  }
  constructor() {
    this.dogs = [
      {image: "/assets/img/dog7.jpg", name: "Zena", des: "Female, 1,5 years old"},
      {image: "/assets/img/dog8.jpg", name: "Rich", des: "Male, 3,5 years old"},
      {image: "/assets/img/dog9.jpg", name: "Lapausha", des: "Male, 5 years old"},
      {image: "/assets/img/dog10.jpg", name: "Lambada", des: "Female, 3 years old"},
      {image: "/assets/img/dog11.jpg", name: "Snezhka", des: "Female, 2 years old"},
      {image: "/assets/img/dog12.jpg", name: "Bulka", des: "Female, 1,5 years old"},

    ];
  }



}
