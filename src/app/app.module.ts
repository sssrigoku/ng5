import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { Routes, Router, RouterModule } from '@angular/router'; 
import { DataService } from './data.service';

const routes: Routes = [
  { path: 'Home', component: HomeComponent} ,
  { path: 'About/:id', component: AboutComponent} 
]
@NgModule({
declarations: [
AppComponent,
HomeComponent,
AboutComponent,
],
imports: [
BrowserModule,
FormsModule,
BrowserAnimationsModule,
RouterModule.forRoot(routes),
],
providers: [DataService],
bootstrap: [AppComponent]
})
export class AppModule { } 
