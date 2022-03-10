import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task3',
  templateUrl: './task3.component.html',
  styleUrls: ['./task3.component.css']
})
export class Task3Component {

  inputStr: string = ''
  outputStr: string = ''
  strStyle: string = ''

  strProcess: any = {
    id_1: function(str: string){
      return str.toUpperCase()
    },
    id_2: function(str: string){
      let strList = str.split("");
      let reverseStrList = strList.reverse();
      let reverseStr = reverseStrList.join("");
      return reverseStr;
    }, 
    id_3: function(str: string){
      let strList = str.split("");
      let half: number = Math.floor(strList.length / 2);    

      let firstHalf: string = strList.slice(0, half).join("")
      let secondHalf: string = strList.slice(-half).join("")

      return firstHalf.toUpperCase()+secondHalf.toLowerCase()
    }, 
  }

  constructor() { }

  onBtnClick(){
    let processFun = this.strProcess[this.strStyle]
    this.outputStr = processFun(this.inputStr)
  }

}
