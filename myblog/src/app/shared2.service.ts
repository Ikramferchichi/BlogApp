import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Shared2Service {
sweets : any[]=[];
  constructor(private http:HttpClient){

  }

  url='http://127.0.0.1:4000/sweet/';
  
  //url+/ajout ===> http://127.0.0.1:3000/sweet/ajout
  //ajout sweet : endpoint post body 

  create(sweet : any){
     return this.http.post(this.url+'ajout',sweet)
  }

  //getAllsweets
  getAllsweets(){
    return this.http.get(this.url+'all');
  }

  deletesweet(id:any){
    return this.http.delete(this.url+'supprimer/'+id);
  }

  getsweetById(id:any){
   return this.http.get(this.url+'getbyid/'+id);
  }

  updatesweet(id:any, sweet: any){
    return this.http.put(this.url+'update/'+id ,sweet);
  }

}


