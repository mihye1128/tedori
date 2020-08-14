import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';
import { RateService } from 'src/app/services/rate.service';
import { Condition } from 'src/app/interfaces/condition';
import { ConditionsService } from 'src/app/services/conditions.service';

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
    private rateService: RateService,
    private conditionsService: ConditionsService
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
    const formData = this.form.value;
    const base = formData.type === 'monthly' ? +formData.base : 0;
    const allowance = formData.type === 'monthly' ? +formData.allowance : 0;
    const travelCost = formData.type === 'monthly' ? +formData.travelCost : 0;

    const basePerHour = formData.type === 'hourly' ? +formData.basePerHour : 0;
    const travelCostPerDay =
      formData.type === 'hourly' ? +formData.travelCostPerDay : 0;
    const hourPerDay = formData.type === 'hourly' ? +formData.hourPerDay : 0;
    const dayPerMonth = formData.type === 'hourly' ? +formData.dayPerMonth : 0;

    const editedCondition = {
      title: formData.title,
      type: formData.type,
      base,
      allowance,
      travelCost,
      basePerHour,
      travelCostPerDay,
      hourPerDay,
      dayPerMonth,
      ins: formData.ins,
      unemploymentIns: formData.unemploymentIns,
      area: formData.area,
      age: formData.age,
      dependents: formData.dependents,
      cityTax: +formData.cityTax,
      otherDeduction: +formData.otherDeduction,
    };
    this.conditionsService
      .updateCondition(editedCondition, this.data.id)
      .then(() => {
        this.dialogRef.close();
      });
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
