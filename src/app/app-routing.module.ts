import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './awesome/home/home.component';
import {ListComponent} from './awesome/list/list.component';
import {AddComponent} from './awesome/add/add.component';
import {EditComponent} from './awesome/edit/edit.component';
import {DeleteComponent} from './awesome/delete/delete.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'list',
    component: ListComponent
  },
  {
    path: 'add',
    component: AddComponent
  },
  {
    path: 'list/edit/:id',
    component: EditComponent
  },
  {
    path: 'list/delete/:id',
    component: DeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
