import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; // Import SharedModule
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CourrierBloqComponent } from './courrier-bloq/courrier-bloq.component';
import { NotificationComponent } from './notification/notification.component';
import { MsgTelComponent } from './msg-tel/msg-tel.component';
import { LoginPageComponent } from './login/login-page.component';

@NgModule({
  declarations: [AppComponent, UnauthorizedComponent,CourrierBloqComponent, NotificationComponent, MsgTelComponent,LoginPageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    FontAwesomeModule, 
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
