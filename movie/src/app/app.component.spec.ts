import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
 beforeEach(async(() => {
   TestBed.configureTestingModule({
     declarations: [
       AppComponent
     ],
     schemas: [NO_ERRORS_SCHEMA] // to ignore unrecognised[angular-material] elements and attributes
   }).compileComponents();
 }));

 it('should create the app', async(() => {
   const fixture = TestBed.createComponent(AppComponent);
   const app = fixture.debugElement.componentInstance;
   expect(app).toBeTruthy();
 }));

 it(`should have as title 'Movie Cruiser!'`, async(() => {
   const fixture = TestBed.createComponent(AppComponent);
   const app = fixture.debugElement.componentInstance;
   expect(app.title).toEqual('Movie Cruiser!');
 }));

 it('should render title in a h1 tag', async(() => {
   const fixture = TestBed.createComponent(AppComponent);
   fixture.detectChanges();
   const compiled = fixture.debugElement.nativeElement;
   expect(compiled.querySelector('h1').textContent).toContain('Movie Cruiser!');
 }));
});
