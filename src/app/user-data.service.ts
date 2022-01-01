
import {User} from './user-data';
//import { Details } from './ProductDetails';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { UserFetch } from './user-fetch';


export class UserData implements InMemoryDbService {
  createDb(){
    const users: User[] = [
      { id: 1, name: 'Sebastian',email: 'sebastian@gmail.com'  },
      { id: 2, name: 'Mark',email: 'mark@gmail.com'  },
      { id: 3, name: 'John',email: 'john@gmail.com'  },
      { id: 4, name: 'Altair',email: 'altair@gmail.com' },
      { id: 5, name: 'Chad',email: 'chad@gmail.com'  }

    ];
    const user: UserFetch[]=[
      {
        id:1,
        name: 'Sebastian',
        email: 'sebastian@gmail.com'
      },
      {
       id:2,
       name: 'Mark',
       email: 'mark@gmail.com'
     }    ,
     {
       id:3,
       name: 'John',
       email: 'john@gmail.com'
     }    ,
     {
       id:4,
       name: 'Altair',
       email: 'altair@gmail.com'
     } ,
     {
       id:5,
       name: 'Chad',
       email: 'chad@gmail.com'
     }
     ];
    return {users, user};
  }
}
