import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css'],
})
export class StarComponent implements OnChanges {
  @Input() rating: number = 0;
  cropWidth: number = 0;

  ngOnChanges(): void {
    this.cropWidth = (this.rating * 75) / 5;
  }
}
