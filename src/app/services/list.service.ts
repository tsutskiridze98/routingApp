import { default as data } from '../../customer-list.json';
import { Injectable } from '@angular/core';
import { UsersList } from '../components/users-list/users-list.model';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  getUsersList(): Promise<UsersList[]> {
    return new Promise((resolve) => {
      return resolve(data);
    })
  }
  constructor() { }
}
