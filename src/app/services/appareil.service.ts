export class AppareilService {

  appareils = [
      {
        name: 'Machine a laver',
        status: 'on'
      },
      {
        name: 'Frigo',
        status: 'on'
      },
      {
        name: 'Ordinateur',
        status: 'off'
      }
    ];


    switchOnOne(i: number) {
      this.appareils[i].status = 'on';
    }

    switchOffOne(i: number) {
      this.appareils[i].status = 'off';
    }

    switchOnAll() {
      for(let appareil of this.appareils) {
          appareil.status = 'on';
      }
    }

    switchOffAll() {
      for(let appareil of this.appareils) {
        appareil.status = 'off'
      }
    }
}
