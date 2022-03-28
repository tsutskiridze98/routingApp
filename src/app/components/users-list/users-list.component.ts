import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/services/list.service';
import { UsersList } from './users-list.model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  providers: [ListService]
})
export class UsersListComponent implements OnInit {
  userList: UsersList[] = [];

  constructor(private listService: ListService) { }

  async getUsersList() {
    this.userList = await this.listService.getUsersList();
  }

  ngOnInit(): void {
    this.getUsersList();
  }

}
