import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-container',
  templateUrl: './login-container.component.html',
  styleUrls: ['./login-container.component.css']
})
export class LoginContainerComponent implements OnInit {

showLoginPage:boolean=true
title:string | null;

theme:boolean=false;
constructor() { 
  this.title = '';
  this.theme =false;
}
 

  ngOnInit(): void {
 this.theme= JSON.parse(localStorage.getItem("toggle")??'');


  }
  public reset(data:boolean):void {
    this.showLoginPage=data;
  }

  public toggleTheme():void{
    this.theme=!this.theme;
    //this.title="hello Govind";
    localStorage.setItem("toggle",JSON.stringify (this.theme));
  }


  parse(text:string): void {

  }

  getItem(key:string): string | null {
    return null;
  }
  

}
