import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-four-parent',
  templateUrl: './task-four-parent.component.html',
  styleUrls: ['./task-four-parent.component.css']
})
export class TaskFourParentComponent implements OnInit {

  inputNumber: number = 0
  inputStr: string = ''

  constructor() { }

  ngOnInit(): void {
  }

  getFactorial(){
    let res = 1;

    for(let i = 1; i <= this.inputNumber; i++){
      res *= i;
    }
    return  res;

  }

  getSquare(){
    return this.inputNumber * this.inputNumber;
  }

}
