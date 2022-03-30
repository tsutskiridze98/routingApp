import { default as data } from '../../customer-details.json';
import { Injectable } from '@angular/core';
import { UsersDetails } from '../components/users-details/users-details.model';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  getDetailById(id: number): Promise<UsersDetails | undefined> {
    return new Promise((resolve) => {
      return resolve(data.find((us: any) => us.id === id));
    })
  }

  constructor() { }
}
