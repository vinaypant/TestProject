import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { FailStudentComponent } from "./fail-student/fail-student.component";
import { PassStudentComponent } from "./pass-student/pass-student.component";
import { StudentService } from "./services/student.service";
import { StudentRoutingModule } from "./student-routing.module";
import { StudentComponent } from "./student.component";

@NgModule({
    declarations:[StudentComponent,PassStudentComponent,FailStudentComponent],
    imports: [CommonModule, SharedModule,StudentRoutingModule],
    providers: [StudentService],
    
    
})
export class StudentModule {

}