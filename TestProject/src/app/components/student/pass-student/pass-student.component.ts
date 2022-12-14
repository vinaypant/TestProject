import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pass-student',
  templateUrl: './pass-student.component.html',
  styleUrls: ['./pass-student.component.css']
})
export class PassStudentComponent implements OnInit {

  colorChoices:number[]=[1,2,3,4,5];
  
  constructor() { }

  ngOnInit(): void {
        
  
  }
  add(){
    this.colorChoices.push(Math.random());
  }

}
