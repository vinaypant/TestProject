import { NgModule } from "@angular/core";
import { BackgroundHighlightDirective } from "src/app/shared/directives/background-highlight.directive";
import { SharedModule } from "src/app/shared/shared.module";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { LayoutRoutingModule } from "./layout-routing.module";
import { LayoutComponent } from "./layout.component";
import { NavMenuComponent } from "./nav-menu/nav-menu.component";



@NgModule({
       imports:[LayoutRoutingModule,SharedModule],
       declarations:[FooterComponent,HeaderComponent,NavMenuComponent,LayoutComponent],
       exports:[FooterComponent,HeaderComponent,NavMenuComponent,LayoutComponent],
       
})
export class LayoutModule{

}