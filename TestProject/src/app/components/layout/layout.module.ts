import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { LayoutRoutingModule } from "./layout-routing.module";
import { NavMenuComponent } from "./nav-menu/nav-menu.component";



@NgModule({
       imports:[LayoutRoutingModule],
       declarations:[FooterComponent,HeaderComponent,NavMenuComponent],
       exports:[FooterComponent,HeaderComponent,NavMenuComponent],
       
})
export class LayoutModule{

}