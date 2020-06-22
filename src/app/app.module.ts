import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import {MatTableModule} from '@angular/material/table';
import {MatMenuModule} from '@angular/material/menu';

import {MatButtonModule} from '@angular/material/button';
import { AppComponent } from './app.component';
import { CrearPersonaComponent } from './crear-persona/crear-persona.component';
import { ConsultarPersonaComponent } from './consultar-persona/consultar-persona.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    CrearPersonaComponent,
    ConsultarPersonaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatMenuModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
