import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './core/pages/home/main/main.component';
import { AboutComponent } from './core/pages/about/about.component';
import { ProjectComponent } from './core/pages/project/project.component';

const routes: Routes = [
    { path: "", component: MainComponent, data: { animation: "isLeft" } },
    { path: "about", component: AboutComponent, data: { animation: "isRight" } },
    { path: "project/:projectName", component: ProjectComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
