import { Component } from '@angular/core';
import { SharedService } from './service/SharedService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learning-app';

  constructor(private sharedService:SharedService){}

  get selectedOption(){
    return this.sharedService.selectedOption;
  }

}
