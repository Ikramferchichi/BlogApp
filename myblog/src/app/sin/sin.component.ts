import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sin',
  templateUrl: './sin.component.html',
  styleUrls: ['./sin.component.css']
})
export class SinComponent implements OnInit {

  constructor(public _shared:SharedService , private router: Router){

  }
ngOnInit(): void {
 
}
  signin={
  
   Email: '',
   Password: ''
   
  }

    Ajoutersignin(){
     
      //this._shared.signups.push(this.signin);
      this._shared.signin(this.signin.Email,this.signin.Password)
      .subscribe((rep)=>{

        Swal.fire({
          position: 'bottom-end',
          icon: 'success',
          title: 'Welcome to Delicious Descoveries',
          showConfirmButton: false,
          timer: 1500
        })
        //console.log(rep);
        this.signin={
        
          Email: '',
          Password: '',
        
        }
       

        this.router.navigate(['home'])
      },
        (error) => {
          // Handle the error here
          console.error('Sign-in error:', error);
  
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Invalid email or password!',
          });
        }
      );

    }}