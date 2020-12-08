import { Component, OnInit, OnChanges, Input} from '@angular/core';
import { ChilddogService} from '../service/childdog.service';

@Component({
  selector: 'app-childdog',
  templateUrl: './childdog.component.html',
  styleUrls: ['./childdog.component.css']
})
export class ChilddogComponent implements OnInit, OnChanges{

  constructor(private ds: ChilddogService) {
  }

  ngOnChanges(){
    throw new Error("Method not implemented.");
  }
  sharedValue = ["image", "name", "des"];
  dogs : any[];

  ngOnInit(){
    this.ds.getDogs().subscribe((response) => {
      this.dogs = response;
    }, (error) => {
      console.log("Error Occured:" + error);
    })
  }

}

