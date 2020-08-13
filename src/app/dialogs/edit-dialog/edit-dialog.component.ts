import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';
import { RateService } from 'src/app/services/rate.service';
import { Condition } from 'src/app/interfaces/condition';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss'],
})
export class EditDialogComponent implements OnInit {
  rate$ = this.rateService.rate$;
  dependents = [...Array(7)].map((_, i) => i + 1);
  form = this.fb.group({
    title: [this.data.title, [Validators.maxLength(20)]],
    type: [this.data.type, [Validators.pattern(/monthly|hourly/)]],
    base: [this.data.base, [Validators.maxLength(8)]],
    allowance: [this.data.allowance, [Validators.maxLength(8)]],
    travelCost: [this.data.travelCost, [Validators.maxLength(7)]],
    basePerHour: [this.data.basePerHour, [Validators.maxLength(6)]],
    travelCostPerDay: [this.data.travelCostPerDay, [Validators.maxLength(5)]],
    hourPerDay: [this.data.hourPerDay, [Validators.maxLength(2)]],
    dayPerMonth: [this.data.dayPerMonth, [Validators.maxLength(5)]],
    ins: [this.data.ins, []],
    unemploymentIns: [this.data.unemploymentIns, []],
    area: [this.data.area, []],
    age: [this.data.age, [Validators.pattern(/young|middle|elderly/)]],
    dependents: [this.data.dependents, []],
    cityTax: [this.data.cityTax, [Validators.maxLength(8)]],
    otherDeduction: [this.data.otherDeduction, [Validators.maxLength(8)]],
  });

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: Condition,
    private dialogRef: MatDialogRef<EditDialogComponent>,
    private fb: FormBuilder,
    private rateService: RateService
  ) {}

  ngOnInit(): void {}

  getTitle(title: string) {
    if (title === '') {
      return '条件名なし';
    } else {
      return title;
    }
  }

  updateCondition() {
    this.dialogRef.close();
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
