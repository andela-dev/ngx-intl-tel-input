import { CountryISO } from 'projects/ngx-intl-tel-input/src/lib/enums/country-iso.enum';
import { SearchCountryField } from 'projects/ngx-intl-tel-input/src/lib/enums/search-country-field.enum';

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PhoneNumberFormat } from 'projects/ngx-intl-tel-input/src/public_api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  separateDialCode = false;
  SearchCountryField = SearchCountryField;
  CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
  preferredCountries: CountryISO[] = [
    CountryISO.UnitedStates,
    CountryISO.UnitedKingdom,
  ];

  phoneForm = new FormGroup({
    phone: new FormControl(null, [Validators.required]),
  });

  changePreferredCountries() {
    this.preferredCountries = [CountryISO.India, CountryISO.Canada];
  }

  public get phoneFormControl(): FormControl {
    return this.phoneForm.controls.phone as FormControl;
  }

  public submit(): void {
    alert('Form submitted');
  }
}
