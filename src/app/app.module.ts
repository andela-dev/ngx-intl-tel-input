import {
  NgxIntlTelInputModule
} from 'projects/ngx-intl-tel-input/src/lib/ngx-intl-tel-input.module';

import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CustomPhoneInputComponent } from './custom-phone-input/custom-phone-input.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomPhoneInputComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgxIntlTelInputModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
