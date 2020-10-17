import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationCompComponent } from './registration-comp/registration-comp.component';
import { SearchDeleteCompComponent } from './search-delete-comp/search-delete-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationCompComponent,
    SearchDeleteCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
