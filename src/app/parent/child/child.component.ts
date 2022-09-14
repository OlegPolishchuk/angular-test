import {Component, EventEmitter, Output} from '@angular/core';

export interface Grade {
  math: number;
  physic: number;
}

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {

  @Output() sendGradeEvent = new EventEmitter<Grade>()

  handleSendEvent() {
    // const grade = 5;
    const grade = {
      math: 5,
      physic: 4,
    }
    this.sendGradeEvent.emit(grade);
  }
}
