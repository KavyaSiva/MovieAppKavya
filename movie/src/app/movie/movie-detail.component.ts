import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { MovieService } from '../movie/movie.service';
import 'rxjs/add/operator/switchMap';
import { Movie } from './movieList';

@Component({
  selector: 'app-details',
  templateUrl: 'movie-detail.component.html',
  styleUrls: ['movie-detail.component.css'],

})
export class MovieDetailsComponent implements OnInit {
movie: Movie[];

constructor(
  private movieService: MovieService,
  private route: ActivatedRoute ) {}

ngOnInit(): void {
  this.route.params
    .switchMap((params: Params) => this.movieService.getMovies(params['movieName']))
    .subscribe(movie => this.movie = movie);
}

}

