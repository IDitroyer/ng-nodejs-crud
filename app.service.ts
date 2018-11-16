import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { map } from "rxjs/operators";
import { Aprendiz } from "../Aprendiz";
import { aprendizAdd } from "../aprendizAdd";
import { AprendizEdit } from "../AprendizEdit"
@Injectable({
  providedIn: 'root'
})
export class AprendicesService {
  domain: String = "http://localhost:3000";
  constructor(private http: HttpClient) { }

  getAprendices(){
    return this.http.get<Aprendiz[]>(`${this.domain}/api/listar`).pipe(map(res => res));
  }
  addAprendiz(newAprendiz: aprendizAdd){
   return this.http.post<aprendizAdd>(`${this.domain}/api/agregar`, newAprendiz).pipe(map(res => res));
  }
  deleteAprendiz(id){
    return this.http.get(`${this.domain}/api/eliminar/${id}`).pipe(map(res => res));
  }
  editAprendiz(id){
    return this.http.get(`${this.domain}/api/editar/${id}`).pipe(map(res => res));
  }
  updateAprendiz(newAprendiz: AprendizEdit){
   
    return this.http.post(`${this.domain}/api/actualizar/${newAprendiz.id}`, newAprendiz).pipe(map(res => res));
  }

}
