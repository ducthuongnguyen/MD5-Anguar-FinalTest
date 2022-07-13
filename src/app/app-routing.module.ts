import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TuorListComponent} from "./component/tuor-list/tuor-list.component";
import {DetailTuorComponent} from "./component/detail-tuor/detail-tuor.component";
import {EditTuorComponent} from "./component/edit-tuor/edit-tuor.component";
import {AddTuorComponent} from "./component/add-tuor/add-tuor.component";
import {DeleteTuorComponent} from "./component/delete-tuor/delete-tuor.component";

const routes: Routes = [{
  path: '',
  component: TuorListComponent,
}, {
  path: 'detail/:id',
  component: DetailTuorComponent,
}, {
  path: "edit/:id",
  component: EditTuorComponent,
}, {
  path: 'add',
  component: AddTuorComponent,
},{
  path:'delete/:id',
  component: DeleteTuorComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
