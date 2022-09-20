import {Component, OnInit} from '@angular/core';
import {BaseResponse, Todo, TodosService} from "src/app/services/todos.service";


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos: Todo[] = [];



  constructor(private todoService: TodosService) { }

  ngOnInit(): void {
    this.getTodos()
  }

  getTodos(){
    this.todoService.getTodos()
      .subscribe(res => {
        this.todos = res;
      })
  }

  createTodo(){
    const randomNumber = Math.floor(Math.random() * 100)
    const title = 'Angular-test -' + randomNumber;

    this.todoService.createTodo(title)
      .subscribe(res => {
        const newTodo = res.data.item;

        this.todos.unshift(newTodo);
      })
  }

  deleteTodo(){
    const todoId = '37cb440e-8e9d-4dae-93ea-415fac0f9914';

    this.todoService.deleteTodo(todoId)
      .subscribe(()=> {
        this.todos = this.todos.filter(todo => todo.id !== todoId)
      })
  }

}
