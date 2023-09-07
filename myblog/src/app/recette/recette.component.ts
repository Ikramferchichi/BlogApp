import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-recette',
  templateUrl: './recette.component.html',
  styleUrls: ['./recette.component.css']
})
export class RecetteComponent implements OnInit{
  
    
    constructor(public _shared:SharedService , private router: Router){

    }
  ngOnInit(): void {
 
  }
    newrecette={
      Name:'',
      Recette:'',
      Categ:'',
      Img:''
    }
 
      Ajouterrecette(){
       
        //this._shared.recettes.push(this.newrecette);
        this._shared.create(this.newrecette)
        .subscribe((rep)=>{
  
          Swal.fire({
            position: 'bottom-end',
            icon: 'success',
            title: 'detox sucessfuly added',
            showConfirmButton: false,
            timer: 1500
          })
          //console.log(rep);
          this.newrecette={
            
              Name:'',
              Recette:'',
              Categ:'',
              Img:''
            
          }
  
          this.router.navigate(['/listV'])
         
        })
       
       
      }
      
    
  }
  


