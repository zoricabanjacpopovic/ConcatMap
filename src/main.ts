import { Component, OnInit } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>Hello from {{ name }}!</h1>
    <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angular
    </a>
  `,
})
export class App implements OnInit{
ngOnInit(): void {
  range(1,5)
  .pipe(
    concatMap( i => of(i))
  )
}
  name = 'Angular';
}

randomDelay(){
  return Math.floor(Math.random() * 1000) + 500;
}
bootstrapApplication(App);
