import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzModalRef, NzNotificationService } from 'ng-zorro-antd';
import { Patient } from 'src/app/model/patient';
import { HospitalService } from '../../services/hospital.service';

@Component({
  selector: 'app-add-patient-modal',
  templateUrl: './add-patient-modal.component.html',
  styleUrls: ['./add-patient-modal.component.css']
})
export class AddPatientModalComponent implements OnInit {

  @Input() selected: Patient;
  validateForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private modal: NzModalRef,
    private hospitalService: HospitalService,
    private notification: NzNotificationService) { }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }


    if (this.validateForm.valid) {
      if (this.selected) {
        const data = this.validateForm.value;
        data.id = this.selected.id;
        this.hospitalService.editPatient(this.selected.id, data).subscribe(res => {
          if (res.success) {
            this.notification.success('Successful', 'The record edited.');
          } else {
            this.notification.error('Error', res.errorMessage);
          }
          this.modal.close();
        }, error => {
          this.notification.error('Error', "Server Error");
          //console.log(error);
          this.modal.close();
        });
       
      } else {
        this.hospitalService.addPatient(this.validateForm.value).subscribe(res => {
          if (res.success) {
            this.notification.success('Successful', 'The record created.');
          } else {
            this.notification.error('Error', res.errorMessage);
          }
          this.modal.close();
        }, error => {
          this.notification.error('Error', "Server Error");
          //console.log(error);
          this.modal.close();
        });
      }
    } 

  }


  ngOnInit(): void {
    this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
      sex: [null, [Validators.required]],
      age: [null, [Validators.required]],
      physician: [null],
      diagnosis: [null],
    });

    if (this.selected) {
      this.validateForm.patchValue(this.selected);
    }
  }

}
