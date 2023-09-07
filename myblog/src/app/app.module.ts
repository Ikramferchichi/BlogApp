import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from  '@angular/common/http';

  

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NavComponent } from './nav/nav.component';
import { RecetteComponent } from './recette/recette.component';
import { UpdateComponent } from './update/update.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ListVComponent } from './list-v/list-v.component';
import { ListSComponent } from './list-s/list-s.component';
import { SupComponent } from './sup/sup.component';
import { SinComponent } from './sin/sin.component';
import { AddSComponent } from './add-s/add-s.component';
import { AddDComponent } from './add-d/add-d.component';
import { ListDComponent } from './list-d/list-d.component';
import { ADDComponent } from './add/add.component';
import { UpdateSComponent } from './update-s/update-s.component';
import { UpdateDComponent } from './update-d/update-d.component';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavComponent,
    RecetteComponent,
    UpdateComponent,
    NotfoundComponent,
    ListVComponent,
    ListSComponent,
    SupComponent,
    SinComponent,
    AddSComponent,
    AddDComponent,
    ListDComponent,
    ADDComponent,
    UpdateSComponent,
    UpdateDComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
