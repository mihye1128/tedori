import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';
import { RateService } from 'src/app/services/rate.service';
import { Condition } from 'src/app/interfaces/condition';
import { ConditionsService } from 'src/app/services/conditions.service';
import { areaList } from 'src/app/models/area-list';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss'],
})
export class EditDialogComponent implements OnInit {
  rate$ = this.rateService.rate$;
  areaList: string[] = areaList;
  dependents = this.conditionsService.dependentsCounts;
  maxLength = this.conditionsService.maxLength;

  form = this.fb.group({
    title: [this.data.title, [Validators.maxLength(this.maxLength.title)]],
    type: [this.data.type, [Validators.pattern(/monthly|hourly/)]],
    base: [
      this.data.base,
      [
        Validators.maxLength(this.maxLength.base),
        Validators.pattern(/^[0-9]*$/),
      ],
    ],
    allowance: [
      this.data.allowance,
      [
        Validators.maxLength(this.maxLength.allowance),
        Validators.pattern(/^[0-9]*$/),
      ],
    ],
    travelCost: [
      this.data.travelCost,
      [
        Validators.maxLength(this.maxLength.travelCost),
        Validators.pattern(/^[0-9]*$/),
      ],
    ],
    basePerHour: [
      this.data.basePerHour,
      [
        Validators.maxLength(this.maxLength.basePerHour),
        Validators.pattern(/^[0-9]*$/),
      ],
    ],
    travelCostPerDay: [
      this.data.travelCostPerDay,
      [
        Validators.maxLength(this.maxLength.travelCostPerDay),
        Validators.pattern(/^[0-9]*$/),
      ],
    ],
    hourPerDay: [
      this.data.hourPerDay,
      [
        Validators.maxLength(this.maxLength.hourPerDay),
        Validators.pattern(/^[0-9]+(\.[0-9]+)?$/),
      ],
    ],
    dayPerMonth: [
      this.data.dayPerMonth,
      [
        Validators.maxLength(this.maxLength.dayPerMonth),
        Validators.pattern(/^[0-9]*$/),
      ],
    ],
    ins: [this.data.ins, []],
    unemploymentIns: [this.data.unemploymentIns, []],
    area: [this.data.area, []],
    age: [this.data.age, [Validators.pattern(/young|middle|elderly/)]],
    dependents: [this.data.dependents, []],
    cityTax: [
      this.data.cityTax,
      [
        Validators.maxLength(this.maxLength.cityTax),
        Validators.pattern(/^[0-9]*$/),
      ],
    ],
    otherDeduction: [
      this.data.otherDeduction,
      [
        Validators.maxLength(this.maxLength.otherDeduction),
        Validators.pattern(/^[0-9]*$/),
      ],
    ],
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

    const editedCondition = this.conditionsService.transferData(formData);
    this.conditionsService
      .updateCondition(editedCondition, this.data.id)
      .then(() => {
        this.dialogRef.close();
      });
  }
}
