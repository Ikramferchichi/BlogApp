import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  recettes : any[]=[];
  users : any[]=[];

  constructor(private http:HttpClient){

  }

  url='http://127.0.0.1:4000/recette/';
  url2='http://127.0.0.1:4000/sign/';
  //url+/ajout ===> http://127.0.0.1:3000/recette/ajout
  //ajout recette : endpoint post body 
  getAllUsers() {
    return this.http.get(this.url2+'user');
  }
  signup( email: string, password: string) {
    return this.http.post(this.url2+'signup', { Email: email, Password: password });
  }
  signin(email: string, password: string) {
    return this.http.post(this.url2+'signin', { Email: email, Password: password });
  }
  create(recette : any){
     return this.http.post(this.url+'ajout',recette)
  }

  //getAllrecettes
  getAllrecettes(){
    return this.http.get(this.url+'all');
  }

  deleterecette(id:any){
    return this.http.delete(this.url+'supprimer/'+id);
  }

  getrecetteById(id:any){
   return this.http.get(this.url+'getbyid/'+id);
  }

  updaterecette(id:any, recette: any){
    return this.http.put(this.url+'update/'+id ,recette);
  }

}



