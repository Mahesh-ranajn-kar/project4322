import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-age',
  templateUrl: './age.component.html',
  styleUrls: ['./age.component.css']
})
export class AgeComponent implements OnInit {

  @Output() getUseAge = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }
  onBtnClick(userAge: string){
    this.getUseAge.emit(userAge)
  }

}
