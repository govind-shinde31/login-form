import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginContainerComponent } from './login-container/login-container.component';
import { LoginComponent } from './login/login.component';
import { ResetComponent } from './reset/reset.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DesignService } from './design.service';




@NgModule({
  declarations: [
    AppComponent,
    LoginContainerComponent,
    LoginComponent,
    ResetComponent,
    AboutComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [DesignService],
  bootstrap: [AppComponent]
})
export class AppModule { }
