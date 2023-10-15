import { Component, EventEmitter, Output } from '@angular/core';
import { SharedService } from '../service/SharedService';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private sharedService:SharedService){}

  optionSelected(option:string){
  this.sharedService.selectedOption = option;
  }
}
