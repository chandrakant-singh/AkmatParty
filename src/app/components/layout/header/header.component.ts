import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FirebaseService } from '../../../services/firestore-service.service';
import * as bootstrap from 'bootstrap';
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
    private readonly firebaseService: FirebaseService
  ) { }


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
    // if (this.joinForm.valid) {
    //   console.log('Form submitted:', this.joinForm.value);
    this.submitForm();
    // } else {
    //   this.joinForm.markAllAsTouched();
    // }
  }

  submitForm() {
    const formData = {
      state: this.joinForm.get('state')?.value,
      name: this.joinForm.get('name')?.value,
      mobile: this.joinForm.get('mobile')?.value,
      declaration: this.joinForm.get('declaration')?.value,
      consent: this.joinForm.get('consent')?.value
    };

    this.firebaseService.addUser(formData).then(() => {
      console.log('Form submitted successfully');
      // Optionally, you can reset the form after successful submission
      this.joinForm.reset();
      this.closeDialog();
    }).catch((error) => {
      console.error('Error submitting form:', error);
    });
  }

  closeDialog() {
    window.location.reload()
  }

}
