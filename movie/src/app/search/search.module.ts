import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppModule } from '../app.module';
import { SearchComponent } from './search.component';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailsComponent } from '../movie/movie-detail.component';

@NgModule({
  declarations:
  [
    SearchComponent
  ],
  imports: [ CommonModule, RouterModule.forRoot([
      {
        path: 'movie-detail/:movieName',
        component: MovieDetailsComponent
      }
      ])
   ],
  exports: [ SearchComponent ]
})

export class SearchModule { }
