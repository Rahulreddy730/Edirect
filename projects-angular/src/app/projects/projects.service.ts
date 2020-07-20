import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Project } from '../projectslist/project';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:4201/app';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  constructor(private http: HttpClient) {}

  getAll() : Observable<Project[]>{
    return this.http.get<Project[]>('http://localhost:4201/app/projects');
  }

  getProject(id) : Observable<Project> {
    return this.http.get<Project>('http://localhost:4201/app/projects/'+id);
  }

  saveProject(project: Project): Observable<Project>{
      return this.http.put<Project>('http://localhost:4201/app/projects/'+project.id, project, {});
  }

  createProject(project: Project) : Observable<Project>{
    return this.http.post<Project>('http://localhost:4201/app/projects', project, {});
  }
  
  deleteProject(project: Project) : Observable<boolean>{
    console.log("projectid", project.id);
    return this.http.delete<boolean>('http://localhost:4201/app/projects/'+project.id,{});
    console.log('completed delete ');
  }
}
