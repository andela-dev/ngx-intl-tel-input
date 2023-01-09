import { SearchCountryField, CountryISO, PhoneNumberFormat } from 'projects/ngx-intl-tel-input/src/public_api';

import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

const INTERNATIONAL_PHONE_REGEX = /[+][1-9]{1,3} \d/m;
const PHONE_CHARACTERS_REGEX = /[-/(/)+ ]/g;

interface IntlTelModel {
  // eslint-disable-next-line id-denylist
  number: string;
  internationalNumber: string;
  nationalNumber: string;
  e164Number: string;
  countryCode: string;
  dialCode: string;
}

@Component({
  selector: 'app-custom-phone-input[inputId][control]',
  templateUrl: './custom-phone-input.component.html',
})
export class CustomPhoneInputComponent implements OnInit {
  @Input() public inputId: string;
  @Input() public control: FormControl;
  @Input() public label: string = 'Phone number*';

  public readonly SearchCountryField = SearchCountryField;
  public readonly CountryISO = CountryISO;
  public readonly PhoneNumberFormat = PhoneNumberFormat;

  public get hasPhoneError(): boolean {
    return this.control.errors && this.control.touched;
  }

  public ngOnInit(): void {
    const initialPhoneNumber = this.control.value as string;
    if (!initialPhoneNumber) return;

    if (initialPhoneNumber.match(INTERNATIONAL_PHONE_REGEX)) {
      const phoneNumber = initialPhoneNumber.split(' ')[1];
      setTimeout(() => this.control.patchValue(phoneNumber), 400);
    }
  }

  public getPhoneValue(): string {
    const phoneObject = this.control.value as IntlTelModel;
    const dialCode = phoneObject.dialCode;
    const phoneNumber = phoneObject.number.replace(PHONE_CHARACTERS_REGEX, '');

    const formattedPhoneNumber = `${dialCode} ${phoneNumber}`;

    return formattedPhoneNumber;
  }
}
