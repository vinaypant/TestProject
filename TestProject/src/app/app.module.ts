import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from './components/layout/layout.module';


@NgModule({
  declarations: [
    AppComponent,
    // LayoutComponent,
    // HeaderComponent,
    // FooterComponent,
     
   
   
  ],
  imports: [
    BrowserModule,LayoutModule,AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
