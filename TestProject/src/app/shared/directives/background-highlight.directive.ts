import { Directive, ElementRef, HostListener } from "@angular/core";


@Directive({
selector:'[backgroundHighlight]'

})

export class BackgroundHighlightDirective{

    constructor(private eleRef:ElementRef) {
        eleRef.nativeElement.style.background = 'red';

    }
    @HostListener('mouseover') onMouseOver(){
       // this.eleRef.nativeElement.style.color='Red';

    }
    @HostListener('mouseleave') onMouseLeave(){
      //  this.eleRef.nativeElement.style.color='Black';
    }
} 