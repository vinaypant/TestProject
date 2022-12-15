import { debugOutputAstAsTypeScript } from '@angular/compiler';
import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  @Input() msg:string='';
  @Output() messageChange:EventEmitter<any> =new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {

  }
  changeMessage(){
    this.messageChange.emit('Message by output event.')
  }

}
