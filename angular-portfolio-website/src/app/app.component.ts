import { Component } from '@angular/core';
import { slider } from './core/shared/route-animations/route-animations';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slider
  ]
})
export class AppComponent {
  title = 'angular-portfolio-website';

  prepareRoute(outlet: RouterOutlet){    
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
