import { Component, OnInit, Input } from '@angular/core';
import { Deductions } from 'src/app/interfaces/deductions';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @Input() rate: Deductions;

  form = this.fb.group({
    title: ['', [Validators.maxLength(20)]],
    type: ['title', [Validators.pattern(/title|monthly|hourly/)]],
    baseLower: ['', [Validators.maxLength(8)]],
    baseUpper: ['', [Validators.maxLength(8)]],
    allowanceLower: ['', [Validators.maxLength(8)]],
    allowanceUpper: ['', [Validators.maxLength(8)]],
    basePerHourLower: ['', [Validators.maxLength(6)]],
    basePerHourUpper: ['', [Validators.maxLength(6)]],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
}
