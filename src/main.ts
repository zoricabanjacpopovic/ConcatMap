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
  // concatMap
  range(1,5)
  .pipe(
    concatMap( i => of(i))
  )
  .pipe(
    delay(this.randomDelay())
  )
  .subscribe(v => console.log('concatMap', v));


// mergeMap
  range(1,5)
  .pipe(
  mergeMap( i => of(i))
  )
  .pipe(
    delay(this.randomDelay())
  )
  .subscribe(v => console.log('mergeMap', v));
}

// switchMap true
range(21,5)
.pipe(
switchMap( i => of(i))
)
.pipe(
  delay(this.randomDelay())
)
.subscribe(v => console.log('switchMap', v));
}


randomDelay(){
  return Math.floor(Math.random() * 1000) + 500;
}
bootstrapApplication(App);
