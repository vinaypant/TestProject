
import { NgModule } from "@angular/core";
import { BackgroundHighlightDirective } from "./directives/background-highlight.directive";
import { SortPipe } from "./pipes/sort.pipe";
import { UpperCasePipe } from "./pipes/uppercase.pipe";
import { SharedRoutingModule } from "./shared-routing.module";

@NgModule({
    imports: [SharedRoutingModule],
    declarations: [BackgroundHighlightDirective, UpperCasePipe,SortPipe],
    exports: [BackgroundHighlightDirective,UpperCasePipe,SortPipe]

})
export class SharedModule {


}