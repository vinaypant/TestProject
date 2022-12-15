import { Inject, Injectable } from "@angular/core";
import { TestService } from "./test.service";

// @Injectable({
//   providedIn:'root'
// })
export class LoggerService{

    /**
     *
     */
    /*constructor(@Inject(TestService) private _testService:TestService) {
        console.log('LoggerService ctor called');

    }*/
    /**
     *
     */
    constructor() {
       
        
    }

    addLog(){
       // this._testService.testLog();  
    }
    removeLog(){

    }
}