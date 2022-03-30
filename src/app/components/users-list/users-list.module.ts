import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListRoutingModule } from './users-list-routing.module';
import { UsersListComponent } from './users-list.component';


@NgModule({
    imports: [CommonModule, UsersListRoutingModule],
    declarations: [UsersListComponent]
})

export class UsersListModule {}