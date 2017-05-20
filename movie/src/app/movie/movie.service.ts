import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Movie } from './movieList';
@Injectable()
export class MovieService {


constructor(private http: Http) {}
getMovies(movieName: string) {
    return this.http.get('http://www.omdbapi.com/?s=' + movieName)
    .map((response) => response.json().Search || []);
}
}
