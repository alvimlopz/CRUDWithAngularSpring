import { Injectable } from '@angular/core';
import { Course } from '../models/course';
import { HttpClient } from '@angular/common/http';
import { Observable, delay, first, tap } from 'rxjs';
import { Pipe } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private readonly API = '/api/courses'
  constructor(private httpClient: HttpClient) { }

  list(){
    return this.httpClient.get<Course[]>(this.API)
    .pipe(
      first(),
     // delay(2000),
      tap(courses => console.log(courses))
    );
  }

  save(record: Partial<Course>): Observable<Course> {
    return this.httpClient.post<Course>(this.API, record);
}

}
