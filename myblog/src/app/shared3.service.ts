import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Shared3Service {
detoxs : any[]=[];

  constructor(private http:HttpClient){

  }

  url='http://127.0.0.1:4000/detox/';
  
  //url+/ajout ===> http://127.0.0.1:3000/detox/ajout
  //ajout detox : endpoint post body 

  create(detox : any){
     return this.http.post(this.url+'ajout',detox)
  }

  //getAlldetoxs
  getAlldetoxs(){
    return this.http.get(this.url+'all');
  }

  deletedetox(id:any){
    return this.http.delete(this.url+'supprimer/'+id);
  }

  getdetoxById(id:any){
   return this.http.get(this.url+'getbyid/'+id);
  }

  updatedetox(id:any, detox: any){
    return this.http.put(this.url+'update/'+id ,detox);
  }


}
