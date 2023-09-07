import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit  {
users : any;
  constructor(private shared: SharedService) { }
    user={ 
      
      _id:'',
      Email:''
    }
    
  ngOnInit(): void {
    // Chargez la liste des utilisateurs depuis le service
      this.shared.getAllUsers().subscribe((data) => {
      this.users = data;

    });
    this.user={
     
      _id:'',
      Email:''
      // Ajoutez d'autres propriétés au besoin
    }
  }
}
