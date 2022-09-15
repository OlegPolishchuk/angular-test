import { Component, OnInit } from '@angular/core';
import {ValueService} from "src/app/services/value.service";
import {Observable} from "rxjs";
import {BeautyLoggerService} from "src/app/services/beauty-logger.service";

@Component({
  selector: 'app-comp-a',
  templateUrl: './comp-a.component.html',
  styleUrls: ['./comp-a.component.scss']
})
export class CompAComponent implements OnInit {
  // value = 0;
  value$ = new Observable();

  constructor(
    private valueService: ValueService,
    private beautyLogger: BeautyLoggerService,
  ) { }

  ngOnInit(): void {
    this.valueService.value$.subscribe((value) => {
      // this.value = value;
      this.value$ = this.valueService.value$
    })
  }

  handleAdd(){
    this.valueService.add()
    this.beautyLogger.log('add value', 'success')
  }

}
