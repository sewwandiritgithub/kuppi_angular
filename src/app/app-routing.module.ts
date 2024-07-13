import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { StudentComponent } from './components/student/student.component';
import { SolutionComponent } from './solution/solution.component';
import { LoginformComponent } from './loginform/loginform.component';
//import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {
    path: 'header',
    component: HeaderComponent
  },
  {
  path: 'student',
  component:StudentComponent,
  }, 
  {
    path: 'solution',
    component: SolutionComponent,
  },
  {
    path: 'loginform',
    component: LoginformComponent,
  },

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
