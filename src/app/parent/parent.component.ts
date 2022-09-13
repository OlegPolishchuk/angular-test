import {Component} from '@angular/core';

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

 name = 'Ivan';
 surname = 'Petrov';
 city = 'Minsk';

 address: Address = {
   city: 'Minsk',
   street: 'Platonova',
   house: 49,
 }

}
