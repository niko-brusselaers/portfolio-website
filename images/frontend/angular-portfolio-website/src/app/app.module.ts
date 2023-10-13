import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/shared/components/header/header.component';
import { MainComponent } from './core/pages/home/main/main.component';
import { SecondaryNavComponent } from './core/shared/components/secondary-nav/secondary-nav.component';
import { AboutComponent } from './core/pages/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    SecondaryNavComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
