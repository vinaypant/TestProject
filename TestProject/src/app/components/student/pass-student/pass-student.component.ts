import { Component, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pass-student',
  templateUrl: './pass-student.component.html',
  styleUrls: ['./pass-student.component.css']
})
export class PassStudentComponent implements OnInit {

  colorChoices: number[] = [1, 2, 3, 4, 5];
  items: any = [
    { "id": 1, "name": "alok" }, { "id": 2, "name": "kapil" }, { "id": 3, "name": "malik" }

  ];

  bannerMsg: string = 'This is the default banner message.';

  constructor() {

    console.log('constructor called');
  }

  addName() {
    this.items.push({ "id": 4, "name": "deepak" });
    // this.items[0].name="arjun";
  }

  ngOnInit(): void {
    console.log('ngOnInit called');

  }

  add() {
    this.colorChoices.push(Math.random());
   
  }
  ngDoCheck() {

    console.log('ngDoCheck called');
  }
  changeMessage(event: any) {
    console.log(event);
  }
/*
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called');
  }

  changeMessage(event: any) {
    console.log(event);
  }
  ngDoCheck() {

    console.log('ngDoCheck called');
  }
  ngAfterViewInit() {

    console.log('ngAfterViewInit called');
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit called');
  }
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called');
  }
  ngAfterViewChecked() {

    console.log('ngAfterViewChecked called');
  }
  ngOnDestroy() {

    console.log('ngOnDestroy called');
  }*/

}
