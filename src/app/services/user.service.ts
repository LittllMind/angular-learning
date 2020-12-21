import { User } from '../models/User.model';
import { Subject } from 'rxjs/Subject';

export class UserService {

  private users: User[] = [
    new User('Will', 'Alexender', 'will@will.com', 'jus d\'orange', ['coder', 'boire du café'])
  ];

  userSubject = new Subject<User[]>();

  emitUsers() {
    this.userSubject.next(this.users.slice());
  }

  addUser(user: User) {
    console.log(this.users);

    console.log(user);

    this.users.push(user);
    this.emitUsers();
    console.log(this.users);

  }
}
