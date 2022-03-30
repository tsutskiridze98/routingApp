import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailsService } from 'src/app/services/details.service';
import { UsersDetails } from './users-details.model';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.scss'],
  providers: [DetailsService]
})
export class UsersDetailsComponent implements OnInit {
  userDetails: UsersDetails | undefined;

  constructor(private activatedRoute: ActivatedRoute, private detailsService: DetailsService) { }

  async getUsersDetails() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.userDetails = await this.detailsService.getDetailById(Number(id));
  }

  ngOnInit(): void {
    this.getUsersDetails();
  }

}
