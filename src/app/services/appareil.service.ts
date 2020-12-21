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

    addAppareil(name: string, status: string) {
      const appareilObject = {
        id: 0,
        name: '',
        status: ''
      };
      appareilObject.name = name;
      appareilObject.status = status;
      appareilObject.id = this.appareils[(this.appareils.length - 1)].id + 1;
      this.appareils.push(appareilObject);
      this.emitAppareilSubject();
    }

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
