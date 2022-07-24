import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   title = 'myproject';
 name:string='Hi Good Morning, I am Akash gupta.';
 showData(){
  return "Angular Tutorial";
 }
}
