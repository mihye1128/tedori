import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';
import { RateService } from 'src/app/services/rate.service';
import { Condition } from 'src/app/interfaces/condition';
import { ConditionsService } from 'src/app/services/conditions.service';
import { AREA_LIST } from 'src/app/models/area-list';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss'],
})
export class EditDialogComponent implements OnInit {
  rate = this.rateService.rate;
  areaList: string[] = AREA_LIST;
  dependents = this.conditionsService.dependentsCounts;
  titleMaxLength = this.conditionsService.titleMaxLength;
  range = this.conditionsService.range;
  processing = false;

  form = this.fb.group({
    title: [this.data.title, [Validators.maxLength(this.titleMaxLength)]],
    type: [this.data.type, [Validators.pattern(/monthly|hourly/)]],
    base: [
      this.data.base,
      [
        Validators.min(this.range.base.min),
        Validators.max(this.range.base.max),
      ],
    ],
    allowance: [
      this.data.allowance,
      [
        Validators.min(this.range.allowance.min),
        Validators.max(this.range.allowance.max),
      ],
    ],
    travelCost: [
      this.data.travelCost,
      [
        Validators.min(this.range.travelCost.min),
        Validators.max(this.range.travelCost.max),
      ],
    ],
    basePerHour: [
      this.data.basePerHour,
      [
        Validators.min(this.range.basePerHour.min),
        Validators.max(this.range.basePerHour.max),
      ],
    ],
    travelCostPerDay: [
      this.data.travelCostPerDay,
      [
        Validators.min(this.range.travelCostPerDay.min),
        Validators.max(this.range.travelCostPerDay.max),
      ],
    ],
    hourPerDay: [
      this.data.hourPerDay,
      [
        Validators.min(this.range.hourPerDay.min),
        Validators.max(this.range.hourPerDay.max),
      ],
    ],
    dayPerMonth: [
      this.data.dayPerMonth,
      [
        Validators.min(this.range.dayPerMonth.min),
        Validators.max(this.range.dayPerMonth.max),
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
        Validators.min(this.range.cityTax.min),
        Validators.max(this.range.cityTax.max),
      ],
    ],
    otherDeduction: [
      this.data.otherDeduction,
      [
        Validators.min(this.range.otherDeduction.min),
        Validators.max(this.range.otherDeduction.max),
      ],
    ],
  });

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: Condition,
    private dialogRef: MatDialogRef<EditDialogComponent>,
    private fb: FormBuilder,
    private rateService: RateService,
    private conditionsService: ConditionsService,
    private searchService: SearchService
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
    this.processing = true;
    const formData = this.form.value;
    const editedCondition = this.conditionsService.transferData(formData);
    this.conditionsService
      .updateCondition(editedCondition, this.data.id)
      .then(() => {
        this.processing = false;
        editedCondition.id = this.data.id;
        this.searchService.updateConditions.push(editedCondition);
        this.dialogRef.close();
      });
  }
}
