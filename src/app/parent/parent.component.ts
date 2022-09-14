import {Component} from '@angular/core';
import {Grade} from "src/app/parent/child/child.component";

interface WeekGrade {
  id: number;
  grade: number;
}

interface Lesson {
  id: number;
  title: string;
  weekGrades: WeekGrade[];
}

export interface Address {
  city: string;
  street: string;
  house: number;
}

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  lessons: Lesson[] = [
    {
      id: 0,
      title: 'math',
      weekGrades: [{
        id: 0,
        grade: 5,
      },
        {
          id: 1,
          grade: 5,
        },
        {
          id: 2,
          grade: 5,
        }]
    },
    {
      id: 1,
      title: 'physic',
      weekGrades: [{
        id: 0,
        grade: 5,
      },
        {
          id: 1,
          grade: 5,
        },
        {
          id: 2,
          grade: 5,
        }]
    },
    {
      id: 2,
      title: 'English',
      weekGrades: [{
        id: 0,
        grade: 5,
      },
        {
          id: 1,
          grade: 5,
        },
        {
          id: 2,
          grade: 5,
        }]
    },
  ]

  isLoading = true;

  constructor() {
    setTimeout(() => {
      this.isLoading = false;
    }, 3000)
  }

}
