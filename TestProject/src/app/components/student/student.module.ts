import { NgModule } from "@angular/core";
import { DirectiveModule } from "src/app/directives/directive.module";
import { StudentService } from "./services/student.service";
import { StudentRoutingModule } from "./student-routing.module";
import { StudentComponent } from "./student.component";

@NgModule({
    declarations:[StudentComponent],
    imports: [DirectiveModule,StudentRoutingModule],
    providers: [StudentService],
    
    
})
export class StudentModule {

}