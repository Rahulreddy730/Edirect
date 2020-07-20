import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';

import { ProjectsService } from './projects.service';
import { ActivatedRoute } from '@angular/router';
import { Project, TODO } from '../projectslist/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  @Output() toDo = new EventEmitter<TODO>();

  completeToDos: Subject<Array<TODO>>;
  incompleteToDos: Subject<Array<TODO>>;

  
  toDos: TODO[];
  project: Project;
  task: string;

  constructor(private route: ActivatedRoute,private projectService: ProjectsService) { }
  
  ngOnInit() {

    let id =this.route.snapshot.paramMap.get('id');
    this.projectService.getProject(id).subscribe((project)=>{
      this.project = project;
      this.toDos = project.todos;
    });
    // this.completeToDos.next(this.toDos);
    // this.incompleteToDos.next(this.toDos);

  }

  addToDo(str: TODO) {
    console.log("addToDo ",str)
    const todo = {
      "task" : this.task,
      "complete": false
    }
    this.toDos.push(todo);
     this.projectService.saveProject(this.project).subscribe((project)=>{
       this.project = project;
     });
  }

  onAddToDoChange(toDo: TODO) {
    this.task = toDo.task;
  }

  onCompleteToDo(toDo: TODO) {
    console.log("complete changed", toDo);
    //this.completeToDos.pipe(map())
    this.projectService.saveProject(this.project).subscribe((project)=>{
      this.project = project;
    });
    
  }

  onIncompleteToDo(toDo: TODO) {
    //this.store.dispatch(new IncompleteToDo(toDo));
    console.log(" in complete todo",toDo);
    this.projectService.saveProject(this.project).subscribe((project)=>{
      this.project = project;
    });
  }

  gotoList(event){
    this.route
  }

 
}
