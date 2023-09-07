import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Shared2Service } from '../shared2.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-s',
  templateUrl: './add-s.component.html',
  styleUrls: ['./add-s.component.css']
})
export class AddSComponent implements OnInit{


  
    
  constructor(public _shared:Shared2Service , private router: Router){

  }
ngOnInit(): void {

}
  newsweet={
    Name:'',
    Recette:'',
    Categ:'',
    Img:''
  }

    Ajoutersweet(){
     
      //this._shared.sweets.push(this.newsweet);
      this._shared.create(this.newsweet)
      .subscribe((rep)=>{

        Swal.fire({
          position: 'bottom-end',
          icon: 'success',
          title: 'detox sucessfuly added',
          showConfirmButton: false,
          timer: 1500
        })
        //console.log(rep);
        this.newsweet={
          
            Name:'',
            Recette:'',
            Categ:'',
            Img:''
          
        }

        this.router.navigate(['/listS'])
       
      })
     
     
    }
    
  
}