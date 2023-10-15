import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './core/pages/home/main/main.component';
import { AboutComponent } from './core/pages/about/about.component';
import { ProjectComponent } from './core/pages/project/project.component';

const routes: Routes = [
  {path: "", component: MainComponent},
  {path: "about", component: AboutComponent},
  {path: "project/:projectName", component: ProjectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
