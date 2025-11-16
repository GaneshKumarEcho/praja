import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './environament';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateServiceService {

  constructor(
    private http: HttpClient
  ) { }

  url: any = environment.url;

  getStates(): Observable<any>{
    return this.http.get(`${this.url}state/getAll`);
  }

  addState(payload: any): Observable<any>{
    return this.http.post(`${this.url}state/add`,payload);
  }

  editState(id: any, payload: any): Observable<any>{
    return this.http.put(`${this.url}state/edit/${id}`,payload)
  }

  deleteState(id: any): Observable<any>{
    return this.http.delete(`${this.url}state/deleteState/${id}`)
  }

  getStateById(id: any): Observable<any>{
    return this.http.get(`${this.url}state/getState/${id}`)
  }
}
