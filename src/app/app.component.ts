import { Component, OnChanges,
  OnInit, DoCheck,
  AfterContentInit, AfterContentChecked,
   AfterViewInit, AfterViewChecked, OnDestroy , SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges, OnInit, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  toDate: Date = new Date();
  ngOnChanges() {        console.log('AppComponent:OnChanges'); }
  ngOnInit() {           console.log('AppComponent:OnInit'); }
  ngDoCheck() {          console.log('AppComponent:DoCheck'); }
  ngAfterContentInit() {           console.log('AppComponent:AfterContentInit'); }
  ngAfterContentChecked() {        console.log('AppComponent:AfterContentChecked'); }
  ngAfterViewInit() {               console.log('AppComponent:AfterViewInit'); }
  ngAfterViewChecked() {            console.log('AppComponent:AfterViewChecked'); }
  ngOnDestroy() {                   console.log('AppComponent:OnDestroy'); }


}
