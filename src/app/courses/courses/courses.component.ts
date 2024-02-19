import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent implements OnInit{

  courses: Course[] = [];

  //coursesService : CoursesService;
  displayedColumns = ['name', 'category'];

  constructor(private coursesService : CoursesService){
    //this.courses = []; //inicializando a variavel
   // this.coursesService = new CoursesService(); //instanciando
    this.courses = this.coursesService.list();
  }

  ngOnInit(): void {

  }

}
