import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { Programas } from '../modules/registro/programas.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  readonly url = 'https://cms.qailumno.com/servicios';
  constructor(private _http:HttpClient) {

    console.log('la puta madre')
   }


   getNoticias(){
     return this._http.get(`${this.url}/noticias`);
   }

   getInteres(){
     return this._http.get(`${this.url}/programas`)

    //  .pipe(map((value, index, self) => {
    //    return (self.indexOf(value) === index) ? value : false;
    //  }))

    //.pipe(map(res => {res.filter(item,index) => {return res.indexOf(item) === index;}}))
     ;
   }
  
   postForm(data:any){
    return this._http.post(`${this.url}/https://cms.qailumno.com/servicios/registro`,data);
   }


}
