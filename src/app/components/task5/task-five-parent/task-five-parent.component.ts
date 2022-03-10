import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-five-parent',
  templateUrl: './task-five-parent.component.html',
  styleUrls: ['./task-five-parent.component.css']
})
export class TaskFiveParentComponent implements OnInit {

  fname: string = ''
  lname: string = ''
  age: string = ''

  constructor() { }

  ngOnInit(): void {
  }

  getFullNameFromChild(name: string){
    let nameSplit: string[] = name.split(' ')
    this.fname = nameSplit[0].toUpperCase()
    this.lname = nameSplit[1].toUpperCase()
  }

  getUseAgeFromChild(date: string){
    let dobYear: number = parseInt(date.split("-")[0]);
    let currentYear: number = new Date().getFullYear()

    this.age = (currentYear - dobYear).toString()
  }

}
