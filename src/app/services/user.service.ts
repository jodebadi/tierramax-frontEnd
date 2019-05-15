import { Injectable } from '@angular/core';

import { User } from '../Model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public UserList: Array<User> = [
    { userId: 201901,
      name: 'Jose Manuel', lastname: 'Badilla Porras', email: 'josebp.10@hotmail.com', phone: '87063990', password: 'XXXXXXXXXXXX',
      userType: 1, createdBy: 'JODEVELOPERS', createDate: new Date(), available: true, changes: []
    },
    { userId: 201902,
      name: 'Juan Antonio', lastname: 'Ovares Lascares', email: 'antonio1990@hotmail.com', phone: '79674526', password: 'XXXXXXXXXXXX',
      userType: 2, createdBy: 'JODEVELOPERS', createDate: new Date(), available: false, changes: []
    },
    { userId: 201903,
      name: 'Ricardo', lastname: 'Araya Poveda', email: 'raraya3478@hotmail.com', phone: '67341089', password: 'XXXXXXXXXXXX',
      userType: 1, createdBy: 'JODEVELOPERS', createDate: new Date(), available: true, changes: []
    },
    { userId: 201904,
      name: 'Cesar Enrique', lastname: 'Chavarría Baltodano', email: 'charlie890@hotmail.com', phone: '88651377', password: 'XXXXXXXXXXXX',
      userType: 1, createdBy: 'JODEVELOPERS', createDate: new Date(), available: true, changes: []
    },
  ];

  constructor() { }

  _getUsers(): Array<User> {
    return this.UserList;
  }
}
