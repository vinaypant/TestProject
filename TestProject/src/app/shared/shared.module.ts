
import { NgModule } from "@angular/core";
import { BackgroundHighlightDirective } from "./directives/background-highlight.directive";
import { SortPipe } from "./pipes/sort.pipe";
import { UpperCasePipe } from "./pipes/uppercase.pipe";
import { LoggerService } from "./services/logger.service";
import { TestService } from "./services/test.service";
import { SharedRoutingModule } from "./shared-routing.module";
import { BannerComponent } from './banner/banner.component';

@NgModule({
    imports: [SharedRoutingModule],
    declarations: [BackgroundHighlightDirective, UpperCasePipe,SortPipe, BannerComponent],
    exports: [BackgroundHighlightDirective,UpperCasePipe,SortPipe,BannerComponent],
    providers:[LoggerService,TestService]

})
export class SharedModule {


}