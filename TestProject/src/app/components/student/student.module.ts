import { NgModule } from "@angular/core";
import { StudentService } from "./services/student.service";
import { StudentRoutingModule } from "./student-routing.module";
import { StudentComponent } from "./student.component";

@NgModule({
    declarations:[StudentComponent],
    imports: [StudentRoutingModule],
    providers: [StudentService],
    
})
export class StudentModule {

}