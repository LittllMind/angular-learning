import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth = false;

  appareils = [
    {
      name: 'Machine a laver',
      status: 'off'
    },
    {
      name: 'Frigo',
      status: 'off'
    },
    {
      name: 'Ordinateur',
      status: 'off'
    }
  ];

  constructor() {
    setTimeout(
      () => {
      this.isAuth = true
    }, 4000
    );
  }

  onAllumer() {
    console.log('On allume tout !');
  }

}
