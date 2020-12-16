export class AppareilService {

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


    switchOnOne(i: number) {
      this.appareils[i].status = 'allumé';
    }

    switchOffOne(i: number) {
      this.appareils[i].status = 'éteint';
    }

    switchOnAll() {
      for(let appareil of this.appareils) {
          appareil.status = 'allumé';
      }
    }

    switchOffAll() {
      for(let appareil of this.appareils) {
        appareil.status = 'éteint'
      }
    }
}
