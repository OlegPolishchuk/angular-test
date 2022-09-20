import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

interface Todo {
  addedDate: string;
  id: string;
  order: number;
  title: string
}

export interface baseResponse<T = {}> {
  data: T;
  message: string[];
  fieldErrors: string[];
  resultCode: number;
}


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos: Todo[] = [];

  httpOptions = {
    withCredentials: true,
    headers: {
      'api-key': 'c475897d-e7c6-4b7b-b62d-8534f379a294'
    },
  }

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getTodos()
  }

  getTodos(){
    this.http.get<Todo[]>('https://social-network.samuraijs.com/api/1.1/todo-lists', this.httpOptions)
      .subscribe((res) => {
        this.todos = res;
      })
  }

  createTodo(){
    const randomNumber = Math.floor(Math.random() * 100)
    const title = 'Angular-test -' + randomNumber;

    this.http.post<baseResponse<{item: Todo}>>('https://social-network.samuraijs.com/api/1.1/todo-lists', {title}, this.httpOptions)
      .subscribe(res => {
        const newTodo = res.data.item;

        this.todos.unshift(newTodo);
      })
  }

  deleteTodo(){
    const todoId = 'a1f796b5-ac7f-415e-a67e-02768647f831';

    this.http.delete<baseResponse>(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todoId}`, this.httpOptions)
      .subscribe(() => {
        this.todos = this.todos.filter(todo => todo.id !== todoId)
      })
  }

}
