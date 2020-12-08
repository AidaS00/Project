import { Component, OnInit, OnChanges, Input} from '@angular/core';
import { ChildcatService} from '../service/childcat.service';
import {Cats} from '../cats';
import {CatService} from '../service/cat.service';

@Component({
  selector: 'app-catchild',
  templateUrl: './catchild.component.html',
  styleUrls: ['./catchild.component.css']
})
export class CatchildComponent implements OnInit, OnChanges{

  constructor(private cs: ChildcatService) {
  }

  ngOnChanges(){
    throw new Error("Method not implemented.");
  }
  sharedValue = ["image", "name", "des"];
  cats : any[];

  ngOnInit(options?: PushSubscriptionOptionsInit): void{
    this.cs.getCats().subscribe((response) => {
      this.cats = response;
    }, (error) => {
      console.log("Error Occured:" + error);
    })
  }

}
