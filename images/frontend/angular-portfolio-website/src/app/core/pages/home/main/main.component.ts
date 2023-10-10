import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
    image = "https://picsum.photos/200/300"
    content = "Hello World! I'm Niko function(ing) at my best creating web 'magic for you'. lets print() the future of the internet"
    title = ["Niko","Brusselaers","Portfolio"]
}
