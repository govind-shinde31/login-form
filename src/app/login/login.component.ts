import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DesignService } from '../design.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() showResetEvent = new EventEmitter<boolean>();
  @Input() themechange?: boolean;

  constructor(private message:DesignService) { }


  //property assign with service
  product="assign";
  
  //object and service
  object={};
  
  ngOnInit(): void {
    //initialise property and equalise
    this.product=this.message.product;

    

    //object intialise
    this.object=this.message.object.firstName;
    //this.object=this.message.object.lastName;

  }
  //show reset login page event method
  public showResetPage(): void {
    this.showResetEvent.emit(false);
  }
  //alert service method
  btnClick():void{
    this.message.messgeAlert();
  }

 
}
