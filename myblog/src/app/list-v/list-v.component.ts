import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-v',
  templateUrl: './list-v.component.html',
  styleUrls: ['./list-v.component.css']
})
export class ListVComponent implements OnInit {
    recettes : any;
    
    constructor(public _shared:SharedService){
    }
    ngOnInit(): void {
      
      this._shared.getAllrecettes()
      .subscribe((rep)=>{
        this.recettes=rep;
        console.log(this.recettes)
  
      })
    }
  
  
    Deleterecette(id:any){
  
      Swal.fire({
        position: 'bottom-end',
        icon: 'success',
        title: 'detox sucessfuly deleted',
        showConfirmButton: false,
        timer: 1500
      })
      
  
             this._shared.deleterecette(id)
             .subscribe(res=>{
               this.ngOnInit();
             })
  
  
  
         
        }
      }
  
  
  
  
  
  
  
  
  
  

