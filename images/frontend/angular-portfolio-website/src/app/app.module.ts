import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/shared/components/header/header.component';
import { MainComponent } from './core/pages/home/main/main.component';
import { SecondaryNavComponent } from './core/shared/components/secondary-nav/secondary-nav.component';
import { AboutComponent } from './core/pages/about/about.component';
import { ProjectComponent } from './core/pages/project/project.component';
import { CarouselModule } from '@coreui/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselComponent } from './core/shared/components/carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    SecondaryNavComponent,
    AboutComponent,
    ProjectComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
