import { Subject } from 'rxjs/Subject';

export class AppareilService {

  appareilsSubject = new Subject<any[]>();

  private appareils = [
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

    emitAppareilSubject() {
      this.appareilsSubject.next(this.appareils.slice());
    }

    switchOnOne(i: number) {
      this.appareils[i].status = 'on';
      this.emitAppareilSubject();
    }

    switchOffOne(i: number) {
      this.appareils[i].status = 'off';
      this.emitAppareilSubject();
    }

    switchOnAll() {
      for(let appareil of this.appareils) {
          appareil.status = 'on';
      }
      this.emitAppareilSubject();
    }

    switchOffAll() {
      for(let appareil of this.appareils) {
        appareil.status = 'off';
        this.emitAppareilSubject();
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
