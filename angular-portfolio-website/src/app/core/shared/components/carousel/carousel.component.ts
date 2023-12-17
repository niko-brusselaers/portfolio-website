import { Component, Input, OnChanges, OnDestroy } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { databaseService } from 'src/app/core/services/databaseService';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnChanges, OnDestroy {
  @Input() images: string[] = [];
  @Input() width = "100%";
  @Input() height = "100%";
  selectImage = 0;
  singleImage = false;
  private intervalSubscription: Subscription | undefined;

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
    this.startImageInterval();
  }

  ngOnDestroy(): void {
    this.stopImageInterval();
  }

  private startImageInterval(): void {
    const intervalSeconds = 5; // Change this to the desired interval in seconds
    this.intervalSubscription = interval(intervalSeconds * 1000)
      .subscribe(() => {
        this.selectNextImage();
      });
  }

  private stopImageInterval(): void {
    if (this.intervalSubscription) {
      this.intervalSubscription.unsubscribe();
    }
  }

  selectNextImage(): void {
    if (this.selectImage < this.images.length - 1) this.selectImage++
    else this.selectImage = 0
  }

  selectPreviousImage(): void {
    if (this.selectImage > 0) this.selectImage--
    else this.selectImage = this.images.length - 1
  }

  getCurrentImage(): string {
    return `url(${this.images[this.selectImage]})`
  }
}
