import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit, OnChanges {

  data: number = 0

  @Input() set sqr(value: number){
    this.data = value * value
  }

  constructor() { }
  
  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes.sqr.currentValue)
  }

  ngOnInit(): void {
    
  }

}
