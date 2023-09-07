import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Shared3Service } from '../shared3.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-d',
  templateUrl: './add-d.component.html',
  styleUrls: ['./add-d.component.css']
})
export class AddDComponent implements OnInit {
  constructor(public _shared:Shared3Service , private router: Router){

  }
ngOnInit(): void {
 
}
  newdetox={
    Name:'',
    Recette:'',
    Categ:''
    

    
  }
myFile:any;
    Ajouterdetox(){
      //this._shared.detoxs.push(this.newdetox);
      this._shared.create(this.newdetox)
      .subscribe((rep)=>{
        Swal.fire({
          position: 'bottom-end',
          icon: 'success',
          title: 'detox sucessfuly added',
          showConfirmButton: false,
          timer: 1500
        })
        //console.log(rep);
        this.newdetox={
          
            Name:'',
            Recette:'',
            Categ:''
           
      
        }
        this.router.navigate(['/listD'])
       
      })
    }
    selectFile(e:any){
     console.log(e);
     this.myFile=e.target.files[0];
     console.log(this.myFile);


    } 
    
}
