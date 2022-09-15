import { Component, OnInit } from '@angular/core';
import {ValueService} from "src/app/services/value.service";
import {Observable} from "rxjs";
import {BeautyLoggerService} from "src/app/services/beauty-logger.service";

@Component({
  selector: 'app-comp-b',
  templateUrl: './comp-b.component.html',
  styleUrls: ['./comp-b.component.scss']
})
export class CompBComponent implements OnInit {
  // value = 0;
  value$ = new Observable();
  constructor(
    private valueService: ValueService,
    private beautyLogger: BeautyLoggerService,
  ) { }

  ngOnInit(): void {
    this.valueService.value$.subscribe(value => {
      // this.value = value;
    })
    console.log(this.valueService.value$)

    this.value$ = this.valueService.value$;
  }

  handleDec() {
    this.valueService.dec();
    this.beautyLogger.log('dec value', 'info')
  }
}
