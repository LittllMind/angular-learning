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

<<<<<<< HEAD

    switchOnAll() {
      for(let appareil of this.appareils) {
        appareil.status = 'allumé';
=======
    switchOnOne(i: number) {
      this.appareils[i].status = 'allumé';
    }

    switchOffOne(i: number) {
      this.appareils[i].status = 'éteint';
    }

    switchOnAll() {
      for(let appareil of this.appareils) {
          appareil.status = 'allumé';
>>>>>>> IX-services
      }
    }

    switchOffAll() {
      for(let appareil of this.appareils) {
<<<<<<< HEAD
        appareil.status = 'éteind';
=======
        appareil.status = 'éteint'
>>>>>>> IX-services
      }
    }
}
