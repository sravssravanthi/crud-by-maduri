import { DeleteComponent } from './delete/delete.component';
import { AddComponent } from './add/add.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {path:'add',component:AddComponent},
  {path:'delete',component:DeleteComponent},
  {path:'edit',component:EditComponent},
  {path:'view',component:ViewComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
