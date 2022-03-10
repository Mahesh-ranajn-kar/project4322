import { Component, OnInit } from '@angular/core';

interface Symbol{
  [key: string]: string;
}



@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.css']
})
export class Task2Component implements OnInit {

  countryCurrencySymbol: {[key: string]: string } = {
    IND: '₹',
    USA: '$',
    UK: '£'
  }

  countryCurrencyRate: {[key: string]: number } = {
    IND_TO_USA: 0.0130034,
    IND_TO_UK: 0.00992584,
    USA_TO_IND: 76.9032,
    USA_TO_UK: 0.763300,
    UK_TO_IND: 100.758,
    UK_TO_USA: 1.31001,
  }
  
  leftComboValue: string = '--Select--'
  rightComboValue: string = '--Select--'

  inputAmount: string = ''
  resultAmount: string = ''

  constructor() { }

  ngOnInit(): void {
  }

  onConveryBtnClick(){
    let value = this.doMoneyConvert()
    this.resultAmount = value

  }

  doMoneyConvert(): any{

    if(this.leftComboValue === this.rightComboValue){
      alert('Invaild Input');
      return;
    }

    let reateKey = this.leftComboValue + "_TO_" + this.rightComboValue;
    let money = parseInt(this.inputAmount)
    let moneyRate = this.countryCurrencyRate[reateKey]
    let convertMoney = money * moneyRate;
    
    let leftComboSymbol = this.countryCurrencySymbol[this.leftComboValue];
    let rightComboSymbol = this.countryCurrencySymbol[this.rightComboValue];

    let result: string = `${leftComboSymbol}${this.inputAmount} = ${rightComboSymbol}${convertMoney}`;

    return result;

  }

}
