import { Component,Input, OnChanges } from '@angular/core';
import { databaseService } from 'src/app/core/services/databaseService';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  @Input() images: string[] = [];
  @Input() width = "100%";
  @Input() height = "100%";
  selectImage = 0;

  ngOnChanges(): void {
    if(this.images.length > 0){
      this.selectImage = 0;
    }
  }

  selectNextImage():void{
    if(this.selectImage < this.images.length-1) this.selectImage++
    else this.selectImage = 0
  }

  selectPreviousImage():void{
    if(this.selectImage > 0) this.selectImage--
    else this.selectImage = this.images.length-1
  }


  getCurrentImage():string{
    return `url(${this.images[this.selectImage]})`
  } 

  
}
