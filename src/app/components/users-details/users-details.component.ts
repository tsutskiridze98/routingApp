import { Component, OnInit } from '@angular/core';
import { DetailsService } from 'src/app/services/details.service';
import { UsersDetails } from './users-details.model';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.scss'],
  providers: [DetailsService]
})
export class UsersDetailsComponent implements OnInit {
  userDetails: UsersDetails[] = [];

  constructor(private detailsService: DetailsService) { }

  async getUsersDetails() {
    this.userDetails = await this.detailsService.getUsersDetails();
  }

  ngOnInit(): void {
    this.getUsersDetails();
  }

}
