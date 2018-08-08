import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import {Image} from '../models/image';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
  
})
export class GalleryComponent implements OnInit {
  selectedImage: Image;

  constructor(private todo:TodoService) { }

  ngOnInit() {
  }
  selectImage(image: Image) {
    this.selectedImage = image;
    }

  getTodos(){
    this.todo.getTodos().subscribe(response=>{
      console.log(response);  
    })
  }

}
