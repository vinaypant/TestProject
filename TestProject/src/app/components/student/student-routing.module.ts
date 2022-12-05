import { NgModule } from "@angular/core";
import { Route, RouterModule, Routes } from "@angular/router";
import { StudentComponent } from "./student.component";

const routes: Routes =
    [
        {
            path: '', component: StudentComponent, data: { FeatureId: 1 },
            children: [
                {
                    path: '/:id', component: StudentComponent
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