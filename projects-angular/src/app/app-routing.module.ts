import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectslistComponent } from './projectslist/projectslist.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'projectslist',
    component: ProjectslistComponent
  },
  {
    path: 'projects/:id',
    component: ProjectsComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
