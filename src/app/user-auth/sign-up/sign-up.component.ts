import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor() { }
  name:string='akash';
  email:string='akash@gmail.com';
  password:string='akash@123';
  isShowData:boolean = false;
  ngOnInit(): void {
  }

  showData(){
    this.isShowData = true;
  }
  hideData(){
    this.isShowData = false;
  }

}
