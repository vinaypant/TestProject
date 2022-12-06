import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentEnum } from './enums/student.enum';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  studentEnum = StudentEnum;
  constructor(private _router: Router) { }

  ngOnInit(): void {
  }
  showStudents(studentCategory: number) {

    if (studentCategory == StudentEnum.Fail) {
      this._router.navigate(['./student/fail']);
    }
    else {
      this._router.navigate(['./student/pass']);
    }
  }
  navigateToStudent() {


  }

}
