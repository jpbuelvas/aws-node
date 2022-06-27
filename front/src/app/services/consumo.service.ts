import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { DataResponse } from '../models/data.models';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConsumoService {

  constructor(private http: HttpClient) { }

  getConsumo(){
    const url= `../../assets/data.json`;

     return this.http.get<DataResponse>(url).pipe(
       map(
         resp => {
          //console.log(resp);
           return resp;
         }
       )
     )
   }
}
