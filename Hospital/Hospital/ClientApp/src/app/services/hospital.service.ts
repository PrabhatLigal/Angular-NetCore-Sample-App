import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Patient } from '../model/patient';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {

  baseUrl = environment.apiURL;
  constructor(private http: HttpClient) { }

  getPatients(params: HttpParams = null): Observable<Patient> {
    const url = `${this.baseUrl}/patient/`;
    return this.http.get<Patient>(url, { params });
  }

  addPatient(patient: Patient): Observable<Patient> {
    const url = `${this.baseUrl}/patient/`;
    return this.http.get<Patient>(url, patient );
  }

  editPatient(patient: Patient): Observable<Patient> {
    const url = `${this.baseUrl}/patient/`;
    return this.http.get<Patient>(url, patient );
  }

  deletePatient(patient: Patient): Observable<Patient> {
    const url = `${this.baseUrl}/patient/`;
    return this.http.get<Patient>(url, patient );
  }


}
