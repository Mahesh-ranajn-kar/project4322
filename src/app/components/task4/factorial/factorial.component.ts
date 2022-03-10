import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-factorial',
  templateUrl: './factorial.component.html',
  styleUrls: ['./factorial.component.css']
})
export class FactorialComponent implements OnInit {

  @Input() data: any
  resData:any = ''
  constructor() { }

  ngOnInit(): void {
  }

}
