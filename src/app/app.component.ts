import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth = true;


  constructor() {
    setTimeout(
      () => {
      this.isAuth = false
    }, 4000
    );
  }

  onAllumer() {
    console.log('On allume tout !');
  }

}
