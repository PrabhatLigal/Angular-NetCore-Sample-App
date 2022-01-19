import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './shared/nav-menu/nav-menu.component';
import { HomeComponent } from './pages/home/home.component';
import { CounterComponent } from './pages/counter/counter.component';
import { FetchDataComponent } from './pages/fetch-data/fetch-data.component';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NzIconModule, NZ_ICONS } from 'ng-zorro-antd/icon';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzNotificationModule } from 'ng-zorro-antd/notification';

import { PatientsComponent } from './pages/patients/patients.component';
import { AddPatientModalComponent } from './shared/add-patient-modal/add-patient-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    PatientsComponent,
    AddPatientModalComponent
  ],
  entryComponents: [AddPatientModalComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    BrowserAnimationsModule,
    NzModalModule,
    NzTableModule,
    NzStatisticModule,
    NzButtonModule,
    NzIconModule,
    NzFormModule,
    NzNotificationModule,
    RouterModule.forRoot([
      { path: '', component: PatientsComponent, pathMatch: 'full' },
      //{ path: 'counter', component: CounterComponent },
      //{ path: 'fetch-data', component: FetchDataComponent },
      { path: 'about', component: HomeComponent },
    ])
  ],
  providers: [ 
    { provide: NZ_I18N, useValue: en_US }, 
    // { provide: NZ_ICONS, useValue: icons }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
