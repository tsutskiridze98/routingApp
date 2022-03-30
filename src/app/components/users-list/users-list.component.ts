import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/services/list.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersList } from './users-list.model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  providers: [ListService]
})
export class UsersListComponent implements OnInit {
  userList: UsersList[] = [];

  constructor(private listService: ListService, private router: Router) { }

  async getUsersList() {
    this.userList = await this.listService.getUsersList();
  }

  goToDetails({ id }: any) {
    this.router.navigate(['users-details', id]);
  }

  ngOnInit(): void {
    this.getUsersList();
  }

}
