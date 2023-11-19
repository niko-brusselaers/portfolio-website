import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
    content = "Hello World! I'm Niko function(ing) at my best creating web 'magic for you'. lets print() the future of the internet"
    title = ["Niko","Brusselaers","Portfolio"]

    images: any[] = new Array(3).fill({id: -1, src: '', title: '', subtitle: ''});

  constructor() {}

  ngOnInit(): void {
    this.images[0] = {
      src: "https://picsum.photos/300/400",
    };
    this.images[1] = {
      src: "https://picsum.photos/300/300",
    }
    this.images[2] = {
      src: "https://picsum.photos/300/500",
    }
  }

  onItemChange($event: any): void {
    console.log('Carousel onItemChange', $event);
  }
}
