import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module'

import { RowersComponent } from './rowers/rowers.component';
import { RowerListComponent } from './rowers/rower-list/rower-list.component';
import { HomeComponent } from './home/home.component';
import { RowerService} from './shared/rower.service'
import { HttpClientModule} from '@angular/common/http'
import { DragDropModule } from '@angular/cdk/drag-drop'
import 'hammerjs';
import { DragDropService} from './shared/dragDrop/drag-drop.service';
import { BoxComponent } from './box/box.component'

@NgModule({
  declarations: [
    AppComponent,
    RowersComponent,
    RowerListComponent,
    HomeComponent,
    BoxComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    DragDropModule
  ],
  providers: [RowerService, DragDropService],
  bootstrap: [AppComponent]
})
export class AppModule { }
