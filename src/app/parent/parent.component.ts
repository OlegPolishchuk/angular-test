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
  isSuccess = true

  constructor() {
    setTimeout(() => {
      this.isSuccess = false
    }, 3000)
  }

}
