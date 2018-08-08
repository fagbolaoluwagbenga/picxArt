import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { Image } from "../../models/image";
import { ImageService } from "../../services/image.service";

@Component({
  selector: "app-image-list",
  templateUrl: "./image-list.component.html",
  styles: []
})
export class ImageListComponent implements OnInit {
  @Output() selectedEvent: EventEmitter<Image> = new EventEmitter<Image>();
  images: Image[] = [];
  selectedImage: Image;
  constructor(private imageService: ImageService) {}
  ngOnInit() {
    this.images = this.imageService.getImages();
  }
  onSelect(image: Image) {
    this.selectedEvent.emit(image);
  }
}
