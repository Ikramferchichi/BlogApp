import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { UpdateComponent } from './update/update.component';
import { RecetteComponent } from './recette/recette.component';
import { ListVComponent } from './list-v/list-v.component';
import { ListSComponent } from './list-s/list-s.component';
import { SupComponent } from './sup/sup.component';
import { SinComponent } from './sin/sin.component';
import { ListDComponent } from './list-d/list-d.component';
import { ADDComponent } from './add/add.component';
import { UpdateSComponent } from './update-s/update-s.component';
import { UpdateDComponent } from './update-d/update-d.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  { path:'listV' ,component :ListVComponent},
  { path:'update/:id',component:UpdateComponent},
  { path:'updateS/:id',component:UpdateSComponent},
  { path:'updateD/:id',component:UpdateDComponent},
  {path:'ajout',component:RecetteComponent},
  {path:'listS',component:ListSComponent},
  {path:'listD',component:ListDComponent},
  {path:'signup',component:SupComponent},
  {path:'signin',component:SinComponent},
  { path: 'user-list', component: UserListComponent },
  {path:'ADD',component:ADDComponent},


  {path:'**',component:NotfoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
