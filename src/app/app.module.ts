import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar.component';
import { GalleryComponent } from './gallery/gallery.component';
import { TodoService } from './todo.service';
import { HttpClientModule } from '@angular/common/http';
import { ImageService } from './services/image.service';
import { ImageListComponent } from './gallery/image-list/image-list.component';
import { ImageComponent } from './gallery/image/image.component';
import { ImageDetailComponent } from './gallery/image-detail/image-detail.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import {Routes, RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: '', redirectTo:'/gallery', pathMatch: 'full'},
  { path: 'gallery', component: GalleryComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'about', component: AboutComponent}
  ];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GalleryComponent,
    ImageListComponent,
    ImageComponent,
    ImageDetailComponent,
    ContactComponent,
    AboutComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    TodoService,
    ImageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
