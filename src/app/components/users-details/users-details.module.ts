import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersDetailsComponent } from './users-details.component';
import { UsersDetailsRoutingModule } from './users-details-routing.module';


@NgModule({
    imports: [CommonModule, UsersDetailsRoutingModule],
    declarations: [UsersDetailsComponent]
})

export class UsersDetailsModule {}