import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DesignService {


  //property
  product="property assign method";

  //object 
  object={firstName:"Govind", 
  lastName:"Shinde" 
}
   

  constructor() { }

  //method
  public messgeAlert(): void{ 
   alert("givind shinde");
 }

}
