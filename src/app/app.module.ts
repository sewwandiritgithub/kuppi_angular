import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StudentComponent } from './components/student/student.component';
import { RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SolutionComponent } from './solution/solution.component';
import { AdminComponent } from './admin/admin.component';
import { DashComponent } from './dash/dash.component';
import { UsertableComponent } from './usertable/usertable.component';
import { ComplainttableComponent } from './complainttable/complainttable.component';
import { HRComponent } from './hr/hr.component';
import { LogComponent } from './log/log.component';
import { AdminlogComponent } from './adminlog/adminlog.component';
import { SolutioneditComponent } from './solutionedit/solutionedit.component';
import { LoginformComponent } from './loginform/loginform.component';
import { NewdashComponent } from './newdash/newdash.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UsercrubComponent } from './usercrub/usercrub.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StudentComponent,
    SignupComponent,
    DashboardComponent,
    SolutionComponent,
    AdminComponent,
    DashComponent,
    UsertableComponent,
    ComplainttableComponent,
    HRComponent,
    LogComponent,
    AdminlogComponent,
    SolutioneditComponent,
    LoginformComponent,
    NewdashComponent,
    UsercrubComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'header',
        component: HeaderComponent
      },
      {
      path: 'student',
      component:StudentComponent,
      }, 
      {
        path: 'signup',
        component: SignupComponent,
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'solution',
        component: SolutionComponent,
      },
      {
        path: 'admin',
        component: AdminComponent,
      },
      {
        path: 'dash',
        component :DashComponent,
      },
      {
        path: 'usertable',
        component: UsertableComponent,
      },
      {
        path: 'complainttable',
        component: ComplainttableComponent,
      },
      {
        path: 'log',
        component: LogComponent,
      },
      {
        path: 'hr',
        component: HRComponent,
      },
      {
        path: 'adminlog',
        component: AdminlogComponent,
      },
      {
        path: 'solutionedit',
        component: SolutioneditComponent,
      },
      {
        path: 'newdash',
        component: NewdashComponent,
      },
      {
        path: 'usercrub',
        component: UsercrubComponent,
      },
      




      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
