import {Component, Input, OnInit} from '@angular/core';
import {Address} from "src/app/parent/parent.component";

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {

  name = 'Victor';

  @Input() surname: string = '';
  // @Input() city: string = '';
  @Input() address?: Address
}
