import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardSuiteAndFaceComponent } from './pages/card-suite-and-face/card-suite-and-face.component';

@NgModule({
  declarations: [
    AppComponent,
    CardSuiteAndFaceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
