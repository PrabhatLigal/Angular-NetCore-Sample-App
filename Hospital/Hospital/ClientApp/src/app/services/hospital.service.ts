import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Patient } from '../model/patient';
import { Response } from '../model/response';

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
    //  { name: 'Product 001', id: 1, sex: 'Male',physician:'Dr Chen',age: 20,diagnosis:'N'},
    //  { name: 'Product 002', id: 1, sex: 'Male',physician:'Dr Chen',age: 20,diagnosis:'N'},
    //  { name: 'Product 003', id: 1, sex: 'Female',physician:'Dr Chen',age: 20,diagnosis:'N'},
    //  { name: 'Product 004', id: 1, sex: 'Male',physician:'Dr Chen',age: 20,diagnosis:'N'},
    //  { name: 'Product 005', id: 1, sex: 'Male',physician:'Dr Chen',age: 20,diagnosis:'N'}
    //];
    //return of(p);
    return this.http.get<Patient[]>(url);
  }

  getPatient(id: number): Observable<Patient> {
    const url = `${this.baseUrl}api/v1/patient/${id}`;
    return this.http.get<Patient>(url);
  }

  addPatient(patient: Patient): Observable<Response> {
    const url = `${this.baseUrl}api/v1/patient/`;
    return this.http.post<Response>(url, patient);
  }

  editPatient(id: number,patient: any): Observable<Response> {
    const url = `${this.baseUrl}api/v1/patient/${id}`;
    return this.http.put<Response>(url, patient);
  }

  deletePatient(id: number): Observable<Response> {
    const url = `${this.baseUrl}api/v1/patient/${id}`;
    return this.http.delete<Response>(url);
  }


}
