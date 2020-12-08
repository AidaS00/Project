import { Component,  OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {CatService} from '../service/cat.service';
import {Cats} from '../cats';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnChanges, OnInit {
  displayPic = false;

  constructor(private cs: CatService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
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


