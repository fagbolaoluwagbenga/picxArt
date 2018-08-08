import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class TodoService {
  url = 'http://localhost:3000/api/todos';
  constructor(private http:HttpClient) { }

  getTodos(){
    return this.http.get(this.url);
  }

}
