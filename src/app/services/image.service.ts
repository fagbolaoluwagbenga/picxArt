import { Injectable } from "@angular/core";
import { Image } from "../models/image";

@Injectable()
export class ImageService {
  images: Image[] = [
    new Image(
      "1",
      "First image",
      "First image description",
      "/assets/images/img1.jpg",
      "/assets/images/img1-l.jpg"
    ),
    new Image(
      "2",
      "Second image",
      "First image description",
      "/assets/images/img1.jpg",
      "/assets/images/img2-l.jpg"
    ),
    new Image(
      "3",
      "Third image",
      "First image description",
      "/assets/images/img1.jpg",
      "/assets/images/img3-l.jpg"
    ),
    new Image(
      "4",
      "Forth image",
      "First image description",
      "/assets/images/img1.jpg",
      "/assets/images/img4-l.jpg"
    ),
    new Image(
      "5",
      "Fifth image",
      "First image description",
      "/assets/images/img1.jpg",
      "/assets/images/img5-l.jpg"
    ),
    new Image(
      "6",
      "Sixth image",
      "First image description",
      "/assets/images/img1.jpg",
      "/assets/images/img6-l.jpg"
    ),
    new Image(
      "7",
      "Seventh image",
      "First image description",
      "/assets/images/img1.jpg",
      "/assets/images/img7-l.jpg"
    ),
    new Image(
      "8",
      "Eight image",
      "First image description",
      "/assets/images/img1.jpg",
      "/assets/images/img8-l.jpg"
    )
  ];

  constructor() {}
  getImages() {
    return this.images;
  }
}
