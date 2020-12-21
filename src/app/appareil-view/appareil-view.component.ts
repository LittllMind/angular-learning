import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs/Subscription'

import { AppareilService } from '../services/appareil.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})

export class AppareilViewComponent implements OnInit {

  constructor(private appareilService: AppareilService,
              private authService: AuthService) { }

  appareils: any[];
  appareilSubscription: Subscription;

  isAuth: boolean;

  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });


  ngOnInit() {
    this.appareilSubscription =
  this.appareilService.appareilsSubject.subscribe(
    (appareils: any[]) => {
      this.appareils = appareils;
    }
  );
    this.appareilService.emitAppareilSubject();
    // this.appareils = this.appareilService.appareils;
    this.isAuth = this.authService.isAuth;
  }

  onAllumer() {
    this.appareilService.switchOnAll();
  }

  onEteindre() {
    if(confirm('Etes-vous sûr de vouloir éteindre tous vos appareils ?'))
    {
      this.appareilService.switchOffAll();
    } else {
      return null;
    }
  }

}
