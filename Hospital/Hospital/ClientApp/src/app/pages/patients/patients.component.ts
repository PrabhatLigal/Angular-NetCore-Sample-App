import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { NzModalRef, NzModalService, NzNotificationService } from 'ng-zorro-antd';
import { Patient } from 'src/app/model/patient';
import { HospitalService } from 'src/app/services/hospital.service';
import { AddPatientModalComponent } from 'src/app/shared/add-patient-modal/add-patient-modal.component';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

  patients: Patient[];
  confirmModal: NzModalRef; // For testing by now
  constructor(
    private hospitalService: HospitalService,
    private modal: NzModalService,
    private notification: NzNotificationService,
    private viewContainerRef: ViewContainerRef) { }


  confirmDelete(arg: Patient): void {
    this.confirmModal = this.modal.confirm({
      nzTitle: 'Do you want to delete this record?',
      nzContent: 'This action cannot be undone.',
      nzOnOk: () => {
        this.hospitalService.deletePatient(arg.id).subscribe(res => {
          if (res.success) {
            this.loadData();
            this.notification.success('Successful', 'The record is deleted.');
          } else {
            this.notification.error('Error', res.errorMessage);
          }
        }, error => {
          this.notification.error('Error', "Server Error");
          //console.log(error);
        });
      }
    });
  }

  onEdit(arg: Patient =  null): void{
    const modal = this.modal.create({
      nzTitle: arg ? "Edit" : "Create",
      nzWidth: '768px',
      nzContent: AddPatientModalComponent,
      nzFooter: null,
      nzComponentParams: {
        selected: arg,
      },
      nzOnOk: () => new Promise((resolve) => setTimeout(resolve, 1000)),
    });

    modal.afterClose.subscribe((result) => {
      this.loadData();
    });

  }

  ngOnInit() {
    this.loadData();
  }


  loadData(): void {
    this.hospitalService.getPatients().subscribe((res) => {
      this.patients = res;
    });
  }
}
