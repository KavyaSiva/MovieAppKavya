import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule, MdInputModule} from '@angular/material';
import { SearchModule } from './search/search.module';
import { MovieService } from './movie/movie.service';
import { MovieModule } from './movie/movie.module';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule,
    MdInputModule,
    SearchModule,
    MovieModule,
    RouterModule
    ],
    exports: [
    BrowserAnimationsModule,
    MdButtonModule,
    MdMenuModule,
     MdCardModule,
    MdToolbarModule,
    MdIconModule,
    MdInputModule,
    RouterModule
 ],
  bootstrap: [AppComponent]
})
export class AppModule { }
