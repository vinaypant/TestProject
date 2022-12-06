import { NgModule } from "@angular/core";
import { DirectiveModule } from "src/app/directives/directive.module";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { LayoutRoutingModule } from "./layout-routing.module";
import { LayoutComponent } from "./layout.component";
import { NavMenuComponent } from "./nav-menu/nav-menu.component";



@NgModule({
       imports:[LayoutRoutingModule,DirectiveModule],
       declarations:[FooterComponent,HeaderComponent,NavMenuComponent,LayoutComponent],
       exports:[FooterComponent,HeaderComponent,NavMenuComponent,LayoutComponent],
       
})
export class LayoutModule{

}