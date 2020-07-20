import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { ProjectsService } from '../projects/projects.service';
import { TODO } from '../projectslist/project';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnDestroy, OnInit {

  @Output() toDoChange = new EventEmitter<Partial<TODO>>();

  task: FormControl;

  private unsubscribe = new Subject<void>();

  constructor(private projectService: ProjectsService) { }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  ngOnInit() {
    this.task = new FormControl();
    this.task.valueChanges
      .pipe(debounceTime(200), takeUntil(this.unsubscribe))
      .subscribe((value) => {console.log("value ",value);this.toDoChange.emit({ task: value })});
  }

}