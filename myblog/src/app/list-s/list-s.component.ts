import { Component, OnInit } from '@angular/core';
import { Shared2Service } from '../shared2.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-s',
  templateUrl: './list-s.component.html',
  styleUrls: ['./list-s.component.css']
})
export class ListSComponent implements OnInit {
  sweets : any;
  
  constructor(public _shared:Shared2Service){
  }
  ngOnInit(): void {
    
    this._shared.getAllsweets()
    .subscribe((rep)=>{
      this.sweets=rep;
      console.log(this.sweets)

    })
  }


  Deletesweet(id:any){

    Swal.fire({
      position: 'bottom-end',
      icon: 'success',
      title: 'detox sucessfuly Deleted',
      showConfirmButton: false,
      timer: 1500
    })
    

           this._shared.deletesweet(id)
           .subscribe(res=>{
             this.ngOnInit();
           })



       
      }
    }












