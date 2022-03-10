import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {

  @Output() getFullName = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }
  onBtnClick(userName: string){
    this.getFullName.emit(userName)
  }

}
