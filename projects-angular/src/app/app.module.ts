import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatButtonModule,
  MatDividerModule,
  MatIconModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatTableModule,
  MatToolbarModule,
  MatCardModule,
  MatListModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectslistComponent } from './projectslist/projectslist.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoComponent } from './todo/todo.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './login/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    ProjectslistComponent,
    HomeComponent,
    ProjectsComponent,
    TodoListComponent,
    TodoComponent,
    TodoFormComponent,
    LoginComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatDividerModule,
    MatCardModule,
    MatListModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
