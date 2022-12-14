import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserInfoComponent} from "./user-info/user-info.component";

const routes: Routes = [
  {path: '', redirectTo:'users', pathMatch:"full"},
  { path: 'users', component: UserInfoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
