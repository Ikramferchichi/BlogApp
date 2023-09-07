import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Shared3Service } from '../shared3.service';

@Component({
  selector: 'app-update-d',
  templateUrl: './update-d.component.html',
  styleUrls: ['./update-d.component.css']
})
export class UpdateDComponent implements OnInit{


 
  newdetox:any;
  id:any;   //id eli fel route 
  constructor(private _shared : Shared3Service , 
              private actRoute : ActivatedRoute, 
              private router:Router){

  }

  ngOnInit(): void {
    this.id = this.actRoute.snapshot.paramMap.get('id');
    this._shared.getdetoxById(this.id).subscribe((res)=>{
      console.log("res",res);
      this.newdetox=res;
    })

  }

  Modifierdetox(){
    this._shared.updatedetox(this.id,this.newdetox) .subscribe((res)=>{
      Swal.fire({
        position: 'bottom-end',
        icon: 'success',
        title: 'detox sucessfuly updated',
        showConfirmButton: false,
        timer: 1500
      })
       this.router.navigate(['/listD']);
    },err=>{

    })
  }
}


