import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProject } from '../../shared/models/IProject';
import { databaseService } from '../../services/databaseService';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})

export class ProjectComponent {

    constructor(private route: ActivatedRoute) {
  this.route.params.subscribe(params => {
    const projectName = params['projectName'];
    databaseService.getProjectDetails(projectName).then((project) => {
      this.project = project;
    });
  });
}


    project: IProject = {
      name: "test",
      description: "A portfolio website made with Angular and TailwindCSS. I wanted to create a website that would showcase my skills and projects. I also wanted to create a website that would be easy to maintain and update.  I used TailwindCSS to speed up the development process and to create a consistent design.",
      technologies: ["Angular", "TailwindCSS","Typescript","NodeJs"],
      image: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png",
      url: "niko-brusselaers.com",
      githubLink: ["github.com"]
    }

  // projectName: string | undefined;

  // constructor(private route: ActivatedRoute) {
  //   this.projectName = route.snapshot.params['projectName']    
    

  
}
