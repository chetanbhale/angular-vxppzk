import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ACompoComponent } from './a-compo/a-compo.component';
import { DataService } from './a-compo/data.service';
@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, ACompoComponent],
  bootstrap: [AppComponent],
  providers: [DataService],
})
export class AppModule {}
