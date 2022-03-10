import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-type3',
  templateUrl: './type3.component.html',
  styleUrls: ['./type3.component.css']
})
export class Type3Component implements OnInit {

  choice: string = ''
  num: string = '1'

  constructor() { }

  ngOnInit(): void {
  }

}
