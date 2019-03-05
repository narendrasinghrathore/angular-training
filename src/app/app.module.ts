import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Part1Component } from './part1/part1.component';
import { NavComponent } from './nav/nav.component';
import { MatModule } from './theme/mat/mat.module';
import { ShellComponent } from './container/shell/shell.component';
import { AboutComponent } from './container/about/about.component';
import { Page404Component } from './container/page404/page404.component';
import { FormsModule } from '@angular/forms';
import { MyForDirective } from './my-for.directive';
import { CommonModule } from '@angular/common';
import { FilesizePipe } from './pipes/filesize.pipe';

@NgModule({
  declarations: [
    AppComponent,
    Part1Component,
    NavComponent,
    ShellComponent,
    AboutComponent,
    Page404Component,
    MyForDirective,
    FilesizePipe
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
