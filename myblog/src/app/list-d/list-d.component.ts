import { Component, OnInit } from '@angular/core';
import { Shared3Service } from '../shared3.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-d',
  templateUrl: './list-d.component.html',
  styleUrls: ['./list-d.component.css']
})
export class ListDComponent implements OnInit {


  detoxs : any;
  
  constructor(public _shared:Shared3Service){
  }
  ngOnInit(): void {
    
    this._shared.getAlldetoxs()
    .subscribe((rep)=>{
      this.detoxs=rep;
      console.log(this.detoxs)

    })
  }


  Deletedetox(id:any){


    Swal.fire({
      position: 'bottom-end',
      icon: 'success',
      title: 'detox sucessfuly deleted',
      showConfirmButton: false,
      timer: 1500
    })

           this._shared.deletedetox(id)
           .subscribe(res=>{
             this.ngOnInit();
           })



       
      }
    }












