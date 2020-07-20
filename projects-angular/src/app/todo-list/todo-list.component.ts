import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCheckboxChange } from '@angular/material';

import { TODO, Project } from '../projectslist/project'
import { ProjectsService } from '../projects/projects.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  @Input() toDos: TODO[];

  @Output() toDoChange = new EventEmitter<TODO>();

  constructor(private projectService: ProjectsService) { }

  onCompleteChange( toDo: TODO, change: MatCheckboxChange) {
    console.log("on complete change",toDo);
    this.toDoChange.emit({
      ...toDo,
      complete: change.checked
    });
    console.log("todo changed ", toDo);
  }

}