import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [{
       path: '', children: [
              {
                     //path: 'student', loadChildren: () => import('../student/student.module').then(q => q.StudentModule)
                     path: 'student', loadChildren: async() => (await import('../student/student.module')).StudentModule

              }
       ]

}]

@NgModule({
       imports: [RouterModule.forChild(routes)],
       exports: [RouterModule],

})
export class LayoutRoutingModule {

}