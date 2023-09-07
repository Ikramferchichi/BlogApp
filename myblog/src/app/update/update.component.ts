import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})

export class UpdateComponent  implements OnInit{
 
  newrecette:any;
  id:any;   //id eli fel route 
  constructor(private _shared : SharedService , 
              private actRoute : ActivatedRoute, 
              private router:Router){

  }

  ngOnInit(): void {
    this.id = this.actRoute.snapshot.paramMap.get('id');
    this._shared.getrecetteById(this.id).subscribe((res)=>{
      console.log("res",res);
      this.newrecette=res;
    })

  }

  Modifierrecette(){
    this._shared.updaterecette(this.id,this.newrecette) .subscribe((res)=>{
      Swal.fire({
        position: 'bottom-end',
        icon: 'success',
        title: 'recette sucessfuly updated',
        showConfirmButton: false,
        timer: 1500
      })
       this.router.navigate(['/listV']);
    },err=>{

    })
  }
}


