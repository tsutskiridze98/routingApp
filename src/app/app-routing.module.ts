import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './shell/not-found/not-found.component';
import { UsersDetailsComponent } from './components/users-details/users-details.component';
import { UsersListComponent } from './components/users-list/users-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'users-list',
    pathMatch: 'full',
  },
  {
    path: 'users-list',
    loadChildren: () =>
      import('./components/users-list/users-list.module').then((m) => m.UsersListModule),
  },
  {
    path: 'users-details',
    loadChildren: () =>
      import('./components/users-details/users-details.module').then((m) => m.UsersDetailsModule),
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
