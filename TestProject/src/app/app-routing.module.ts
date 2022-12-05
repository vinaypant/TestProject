import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LayoutComponent } from "./components/layout/layout.component";


const routes:Routes=[
  {
    path:'',
    component:LayoutComponent,
    children:[
        {
            path:'student',
            loadChildren:()=>import('./components/student/student.module').then(q=>q.StudentModule)
        }
    ]
  }

]

@NgModule({
       imports:[RouterModule.forRoot(routes)],
       exports:[RouterModule],
       declarations:[LayoutComponent]
})
export class AppRoutingModule{

}