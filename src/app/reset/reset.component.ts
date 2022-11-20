import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DesignService } from '../design.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {
  @Output()backLoginEvent= new EventEmitter<boolean>();
  @Input() themechange?: boolean;

 
  constructor(private message:DesignService) { }

  ngOnInit(): void {
   
  }
  public backToLogin():void{
    this.backLoginEvent.emit(true);
  }
  public btnClick():void{
    this.message.messgeAlert();
  }


}
