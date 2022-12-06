import { NgModule } from "@angular/core";
import { Route, RouterModule, Routes } from "@angular/router";
import { FailStudentComponent } from "./fail-student/fail-student.component";
import { PassStudentComponent } from "./pass-student/pass-student.component";
import { StudentComponent } from "./student.component";

const routes: Routes =
    [
        {
            path: '', component: StudentComponent, 
            //data: { FeatureId: 1 },
            children: [
                {
                    path:'fail',component:FailStudentComponent
                },
                {
                    path:'pass',component:PassStudentComponent
                    //path: '/:id', component: StudentComponent
                }
                
            ]


        },

    ]
 @NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
   


 })   
 export class StudentRoutingModule{

 }   