import { Component, Input } from '@angular/core';
import { Movie } from '../movie/movieList';
import { Router } from '@angular/router';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
movie: Movie[];
constructor(private router: Router) {}

searchMovie(movieName: string): void  {
    this.router.navigate(['movie-detail', movieName]);
}
}
