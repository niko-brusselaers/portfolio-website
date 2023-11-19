import { Component } from '@angular/core';
import { databaseService } from 'src/app/core/services/databaseService';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
    content = "Hello World! I'm Niko function(ing) at my best creating web 'magic for you'. lets print() the future of the internet"
    title = ["Niko","Brusselaers","Portfolio"]

   

  onItemChange($event: any): void {
    console.log('Carousel onItemChange', $event);
  }
}
