import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDetailsComponent } from './movie-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { MovieService } from './movie.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCardModule, MdMenuModule, MdGridListModule,
MdToolbarModule, MdIconModule, MdInputModule} from '@angular/material';

@NgModule({
  declarations: [
    MovieDetailsComponent
   ],
   imports: [
    CommonModule,
      BrowserAnimationsModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule,
    MdInputModule,
    RouterModule,
    MdGridListModule
 ],
  providers: [ MovieService ]
})
export class MovieModule { }
