import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Patient } from '../model/patient';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {

  baseUrl = environment.apiURL;
  constructor(private http: HttpClient) { }

  getPatients(params: HttpParams = null): Observable<Patient[]> {
    const url = `${this.baseUrl}/patient/`;

    let p:Array<Patient>  = [
      { name: 'Product 001'},
      { name: 'Product 002'},
      { name: 'Product 003'},
      { name: 'Product 004'},
      { name: 'Product 005'}
    ];
    return of(p);
    // return this.http.get<Patient>(url, { params });
  }

  addPatient(patient: Patient): Observable<Patient> {
    const url = `${this.baseUrl}/patient/`;
    return this.http.post<Patient>(url, patient );
  }

  editPatient(patient: Patient): Observable<Patient> {
    const url = `${this.baseUrl}/patient/`;
    return this.http.put<Patient>(url, patient );
  }

  deletePatient(patient: Patient): Observable<Patient> {
    const url = `${this.baseUrl}/patient/`;
    return this.http.delete<Patient>(url );
  }


}
