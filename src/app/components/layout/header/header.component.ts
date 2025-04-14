import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  joinForm!: FormGroup;
  states = [
    'Select state', 'Uttar Pradesh'
    // Add more states as needed
  ];

  constructor(
    private fb: FormBuilder,
  ) {}


  ngOnInit(): void {
    this.joinForm = this.fb.group({
      state: ['', Validators.required],
      name: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      declaration: [false, Validators.requiredTrue],
      consent: [false]
    });
  }

  onSubmit(): void {
    if (this.joinForm.valid) {
      console.log('Form submitted:', this.joinForm.value);
      this.submitFormToGoogleSheet();
    } else {
      this.joinForm.markAllAsTouched();
    }
  }

  submitFormToGoogleSheet() {
    const formData = {
      state: this.joinForm.get('state')?.value,
      name: this.joinForm.get('name')?.value,
      mobile: this.joinForm.get('mobile')?.value,
      declaration: this.joinForm.get('declaration')?.value,
      consent: this.joinForm.get('consent')?.value
    };

  }

}
