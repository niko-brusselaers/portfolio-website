import { Component, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProject } from '../../shared/models/IProject';
import { databaseService } from '../../services/databaseService';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})

export class ProjectComponent {
     project: IProject = {
      name: "",
      description: "",
      technologies: [""],
      image: "",
      url: "",
      githubLink: [""]
    }

    constructor(private route: ActivatedRoute, private cdr: ChangeDetectorRef) {

      

      this.route.params.subscribe(params => {
        const projectName = params['projectName'];
         databaseService.getProjectDetails(projectName).then((project) => {
          this.project = project;
          console.log(project);
          this.cdr.detectChanges();
  });
  });
}


    


  
}
