import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatFormFieldModule,
  MatInputModule, MatRadioModule, MatSelectModule, MatSliderModule,
  MatSlideToggleModule, MatToolbarModule, MatListModule, MatGridListModule,
  MatCardModule, MatIconModule, MatProgressSpinnerModule, MatDialogModule, MatMenuModule } from '@angular/material';
  import {FormsModule, ReactiveFormsModule } from '@angular/forms';
  import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
  import { FlexLayoutModule } from '@angular/flex-layout';
  import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';

import 'hammerjs';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { SchooldetailComponent } from './schooldetail/schooldetail.component';
import { GetinfoService } from '../app/services/getinfo.service';

import { ScienceComponent } from './science/science.component';
import { QuizformComponent } from './quizform/quizform.component';


@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    SchooldetailComponent,
    ScienceComponent,
    QuizformComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule, MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatFormFieldModule,
    MatInputModule, MatRadioModule, MatSelectModule, MatSliderModule,
    MatSlideToggleModule, MatToolbarModule, MatListModule, MatGridListModule,
    MatCardModule, MatIconModule, MatMenuModule , MatProgressSpinnerModule, MatDialogModule, BrowserAnimationsModule,
     HttpModule, AppRoutingModule, FormsModule, ReactiveFormsModule
  ],
  providers: [GetinfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
