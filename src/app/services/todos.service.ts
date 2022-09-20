import { Injectable } from '@angular/core';

export interface Todo {
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

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor() { }
}
