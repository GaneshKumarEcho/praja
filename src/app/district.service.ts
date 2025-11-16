import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './environament';

@Injectable({
  providedIn: 'root'
})
export class DistrictService {
constructor(
    private http: HttpClient
  ) { }

  url: any = environment.url;

  getDistrict(): Observable<any>{
    return this.http.get(`${this.url}district/getAll`);
  }
   getDistrictsByState(id:any): Observable<any>{
    return this.http.get(`${this.url}district/getAll/${id}`);
  }
}
