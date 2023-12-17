import { Component } from '@angular/core';
import { databaseService } from 'src/app/core/services/databaseService';

@Component({
  selector: 'app-secondary-nav',
  templateUrl: './secondary-nav.component.html',
  styleUrls: ['./secondary-nav.component.scss']
})
export class SecondaryNavComponent {
    projects: string[] = []
    
    constructor() {
      databaseService.getProjects().then((projects) => {
        this.projects = projects
        console.log(this.projects);
        
    })
    }
}
