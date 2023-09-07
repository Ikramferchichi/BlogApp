import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';
import Swal from 'sweetalert2';
 

@Component({
  selector: 'app-sup',
  templateUrl: './sup.component.html',
  styleUrls: ['./sup.component.css']
})
export class SupComponent implements OnInit {

  constructor(public _shared:SharedService , private router: Router){

  }
ngOnInit(): void {
 
}
  newsignup={
   Name: '',
   Email: '',
   Password: '',
   RepeatP: ''
  }

    Ajoutersignup(){
      if (this.newsignup.Password !== this.newsignup.RepeatP) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Password and Repeat Password do not match!',
        });
        return; // Stop the sign-up process if passwords don't match
      }
    
      //this._shared.signups.push(this.newsignup);
      this._shared.signup( this.newsignup.Email,this.newsignup.Password)
      .subscribe((rep)=>{

       
        //console.log(rep);
        this.newsignup={
          Name: '',
          Email: '',
          Password: '',
          RepeatP: ''
          
        }
        Swal.fire({
          
          position: 'bottom-end',
          icon: 'success',
          title: 'User Added',
          showConfirmButton: false,
          timer: 1500
          
        })

        this.router.navigate(['/signin'])
       
      })
     
     
    }
    
  
}
