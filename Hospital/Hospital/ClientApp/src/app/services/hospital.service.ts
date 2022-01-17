import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Patient } from '../model/patient';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {

  baseUrl: string;
  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  getPatients(): Observable<Patient[]> {
    const url = `${this.baseUrl}api/v1/patient/`;

    //let p:Array<Patient>  = [
    //  { name: 'Product 001'},
    //  { name: 'Product 002'},
    //  { name: 'Product 003'},
    //  { name: 'Product 004'},
    //  { name: 'Product 005'}
    //];
    //return of(p);
    return this.http.get<Patient[]>(url);
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
