import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Shared2Service } from '../shared2.service';

@Component({
  selector: 'app-update-s',
  templateUrl: './update-s.component.html',
  styleUrls: ['./update-s.component.css']
})
export class UpdateSComponent implements OnInit{

  newsweet:any;
  id:any;   //id eli fel route 
  constructor(private _shared : Shared2Service , 
              private actRoute : ActivatedRoute, 
              private router:Router){

  }

  ngOnInit(): void {
    this.id = this.actRoute.snapshot.paramMap.get('id');
    this._shared.getsweetById(this.id).subscribe((res)=>{
      console.log("res",res);
      this.newsweet=res;
    })

  }

  Modifiersweet(){
    this._shared.updatesweet(this.id,this.newsweet) .subscribe((res)=>{
      Swal.fire({
        position: 'bottom-end',
        icon: 'success',
        title: 'sweet sucessfuly updated',
        showConfirmButton: false,
        timer: 1500
      })
       this.router.navigate(['/listS']);
    },err=>{

    })
  }
}
