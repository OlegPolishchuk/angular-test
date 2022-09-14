import {Component} from '@angular/core';
import {Grade} from "src/app/parent/child/child.component";

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
  math?: number;
  physic?: number;

  getGrade(value: Grade){
    this.math = value.math;
    this.physic = value.physic;
  }

}
