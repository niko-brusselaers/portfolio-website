import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})

export class ProjectComponent {

  projectName: string | undefined;

  constructor(private route: ActivatedRoute) {
    this.projectName = route.snapshot.params['projectName']    
    
}

  
}
