import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCheckboxChange } from '@angular/material';

import { TODO, Project } from '../projectslist/project'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  @Input() toDo: TODO;


  @Output() completeChange = new EventEmitter<MatCheckboxChange>();



}