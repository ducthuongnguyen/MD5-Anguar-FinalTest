import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from "@angular/forms";
import { TuorListComponent } from './component/tuor-list/tuor-list.component';
import {HttpClientModule} from "@angular/common/http";
import { DetailTuorComponent } from './component/detail-tuor/detail-tuor.component';
import { EditTuorComponent } from './component/edit-tuor/edit-tuor.component';
import { AddTuorComponent } from './component/add-tuor/add-tuor.component';
import { DeleteTuorComponent } from './component/delete-tuor/delete-tuor.component';


@NgModule({
  declarations: [
    AppComponent,
    TuorListComponent,
    DetailTuorComponent,
    EditTuorComponent,
    AddTuorComponent,
    DeleteTuorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
