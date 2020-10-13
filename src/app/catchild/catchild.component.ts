import { Component, OnInit, OnChanges, Input} from '@angular/core';

@Component({
  selector: 'app-catchild',
  templateUrl: './catchild.component.html',
  styleUrls: ['./catchild.component.css']
})
export class CatchildComponent implements OnInit, OnChanges{
  cats: any;
  @Input()
  value = 'catpic';
  ngOnInit() {    		  console.log('DogComponent:OnInit');  }
  ngOnChanges() {    	  console.log('DogComponent:OnChanges');  }
  constructor() {

    this.cats = [{image: "/assets/img/cat8.jpg",name: "Murzik", des: "Male, 5 month"},
      {image: "/assets/img/cat9.jpg", name: "Princess", des: "Female, 2 month"},
      {image: "/assets/img/cat10.jpg", name: "Stefani", des: "Female, 3 years"},
      {image: "/assets/img/cat11.jpg", name: "Suleiman", des: "Male, a year"},
      {image: "/assets/img/cat12.jpg", name: "Isko", des: "Male, a year"},
      {image: "/assets/img/cat13.jpg",name: "Margaret", des: "Female, 5 year"}

    ];
  }
}
