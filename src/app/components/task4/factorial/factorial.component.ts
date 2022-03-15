import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-factorial',
  templateUrl: './factorial.component.html',
  styleUrls: ['./factorial.component.css']
})
export class FactorialComponent implements OnInit {

  resData:number = 0

  @Input() set fact(inputNumber:number){
    let res = 1
    this.resData = 1;

    for(let i = 1; i <= inputNumber; i++){
      res *= i;
    } 
    this.resData = res;
  }

  
  constructor() { }

  ngOnInit(): void {
  }

}
