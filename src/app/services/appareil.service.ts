export class AppareilService {

  appareils = [
      {
        id: 1,
        name: 'Machine a laver',
        status: 'on'
      },
      {
        id: 2,
        name: 'Frigo',
        status: 'on'
      },
      {
        id: 3,
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

    getAppareilById(id : number) {
      const appareil = this.appareils.find(
        (s) => {
          return s.id === id;
        }
      );
      return appareil;
    }
}
