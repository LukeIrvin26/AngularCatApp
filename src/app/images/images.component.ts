import { Component, OnInit, Inject } from '@angular/core';
import { ImageService } from '../services/image.service';
import { Image } from '../interfaces/image.interface';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss'],
})
export class ImagesComponent implements OnInit {
  isLoading = false;
  images: Image[] = [];
  imagesCount: number = 0;

  constructor(
    private imageService: ImageService,
    @Inject(MAT_DIALOG_DATA) public data
  ) {}

  ngOnInit(): void {
    this.getImages();
  }

  getImages() {
    this.isLoading = true;
    this.imageService.getImages(this.data.breedId).subscribe((response) => {
      this.images = response;
      this.isLoading = false;
      this.imagesCount = response.length;
    });
  }
}
