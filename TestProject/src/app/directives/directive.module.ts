import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HighlightDirective } from "./highlight.directive";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        HighlightDirective
    ],
    exports: [HighlightDirective]
})
export class DirectiveModule {

} 