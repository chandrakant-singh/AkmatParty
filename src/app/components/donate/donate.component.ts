import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.scss']
})
export class DonateComponent {
  donateForm: FormGroup;
  frequencies = ['One Time', 'Monthly'];
  amounts = [500, 1000, 5000, 100000];
  selectedAmount: number | null = 50;
  selectedFrequency = 'One Time';
  selectedCurrency = 'INR';

  constructor(private fb: FormBuilder) {
    this.donateForm = this.fb.group({
      frequency: [this.selectedFrequency],
      amount: [this.selectedAmount],
      customAmount: [''],
      currency: [this.selectedCurrency],
      // donor: this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        phone: [''],
        address: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required],
        zip: ['', Validators.required],
        consent: [false, Validators.requiredTrue]
      // })
    });
  }

  selectFrequency(freq: any) {
    this.selectedFrequency = freq;
    this.donateForm.patchValue({ frequency: freq });
  }

  selectAmount(amount: number) {
    this.selectedAmount = amount;
    this.donateForm.patchValue({ amount, customAmount: '' });
  }

  selectCurrency(currency: any) {
    this.selectedCurrency = currency;
    this.donateForm.patchValue({ currency });
  }

  onCustomAmountChange(value: any) {
    this.selectedAmount = null;
    this.donateForm.patchValue({ amount: null });
  }

  onSubmit() {
    if (this.donateForm.valid) {
      console.log('Donation Form Submitted:', this.donateForm.value);
    } else {
      this.donateForm.markAllAsTouched();
    }
  }
}
