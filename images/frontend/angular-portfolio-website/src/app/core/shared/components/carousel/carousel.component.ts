import { Component,Input } from '@angular/core';
import { databaseService } from 'src/app/core/services/databaseService';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  @Input() projectName: string | undefined 

  images: string[] = [];

  ngOnInit(): void {
    databaseService.getProjectImages(this.projectName)
    .then((images) => {
      images.forEach((image, index) => {
        this.images[index] = image;
      })
    })
  }
}
