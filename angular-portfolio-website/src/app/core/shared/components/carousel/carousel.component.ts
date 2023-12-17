import { Component, Input, OnChanges, OnDestroy } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('in', style({ opacity: 1 })),
      transition('in => out', [
        animate(
          '0.5s',
          keyframes([
            style({ opacity: 1 }),
            style({ opacity: 0 }),
          ])
        ),
      ]),
      transition('out => in', [
        animate(
          '0.5s',
          keyframes([
            style({ opacity: 0 }),
            style({ opacity: 1 }),
          ])
        ),
      ]),
    ]),
  ],
})
export class CarouselComponent implements OnChanges, OnDestroy {
  @Input() images: string[] = [];
  @Input() width = '100%';
  @Input() height = '100%';
  selectImage = 0;
  singleImage = false;
  manualChange = false;
  private intervalSubscription: Subscription | undefined;
  isFading: string = 'in';

  ngOnChanges(): void {
    if (this.images.length > 0) {
      this.selectImage = 0;
    }

    if (this.images.length === 1) {
      this.singleImage = true;
    } else {
      this.singleImage = false;
    }
  }

  ngAfterViewInit(): void {
    this.ImageInterval();
  }

  ngOnDestroy(): void {
    this.stopImageInterval();
  }

  private ImageInterval(): void {
    const intervalSeconds = 5; // Change this to the desired interval in seconds
    this.intervalSubscription = interval(intervalSeconds * 1000).subscribe(() => {
      if (!this.manualChange) {
        this.selectNextImage();
      } else{
        this.manualChange = false;
      }
    });
  }

  private stopImageInterval(): void {
    if (this.intervalSubscription) {
      this.intervalSubscription.unsubscribe();
    }
  }

  selectNextImage(): void {
    this.isFading = 'out';
    setTimeout(() => {
      if (this.selectImage < this.images.length - 1) this.selectImage++;
      else this.selectImage = 0;
      this.isFading = 'in';
    }, 500); 
  }

  selectPreviousImage(): void {
    this.isFading = 'out';
    setTimeout(() => {
      if (this.selectImage > 0) this.selectImage--;
      else this.selectImage = this.images.length - 1;
      this.isFading = 'in';
    }, 500);
  }

  manualChangeImage(): void {
    this.manualChange = true;
  }

  getCurrentImage(): string {
    return `url(${this.images[this.selectImage]})`;
  }
}
