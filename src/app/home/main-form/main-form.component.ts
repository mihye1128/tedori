import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { ConditionsService } from 'src/app/services/conditions.service';
import { Condition } from 'src/app/interfaces/condition';
import { AREA_LIST } from 'src/app/models/area-list';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.scss'],
})
export class MainFormComponent implements OnInit {
  readonly titleMaxLength = this.conditionsService.titleMaxLength;
  readonly range = this.conditionsService.range;

  uid: string;
  formGroup: FormGroup;
  areaList: string[] = AREA_LIST;
  dependentsCounts = this.conditionsService.dependentsCounts;
  processing = false;

  private conditionsCount = 2;

  constructor(
    private fb: FormBuilder,
    private conditionsService: ConditionsService,
    private viewportScroller: ViewportScroller
  ) {
    this.buildForm();
  }

  get formConditions(): FormArray {
    return this.formGroup.get('formConditions') as FormArray;
  }

  ngOnInit(): void {}

  buildForm() {
    this.formGroup = this.fb.group({
      formConditions: this.fb.array([]),
      formSelect: [
        'single',
        [Validators.required, Validators.pattern(/single|multi/)],
      ],
    });
    for (let i = 0; i < this.conditionsCount; i++) {
      const conditionGroup = this.fb.group({
        title: ['', [Validators.maxLength(this.titleMaxLength)]],
        type: ['monthly', [Validators.pattern(/monthly|hourly/)]],
        base: [
          '',
          [
            Validators.min(this.range.base.min),
            Validators.max(this.range.base.max),
          ],
        ],
        allowance: [
          '',
          [
            Validators.min(this.range.allowance.min),
            Validators.max(this.range.allowance.max),
          ],
        ],
        travelCost: [
          '',
          [
            Validators.min(this.range.travelCost.min),
            Validators.max(this.range.travelCost.max),
          ],
        ],
        basePerHour: [
          '',
          [
            Validators.min(this.range.basePerHour.min),
            Validators.max(this.range.basePerHour.max),
          ],
        ],
        travelCostPerDay: [
          '',
          [
            Validators.min(this.range.travelCostPerDay.min),
            Validators.max(this.range.travelCostPerDay.max),
          ],
        ],
        hourPerDay: [
          '',
          [
            Validators.min(this.range.hourPerDay.min),
            Validators.max(this.range.hourPerDay.max),
          ],
        ],
        dayPerMonth: [
          '',
          [
            Validators.min(this.range.dayPerMonth.min),
            Validators.max(this.range.dayPerMonth.max),
          ],
        ],
        ins: [true, []],
        unemploymentIns: [true, []],
        area: ['東京都', []],
        age: ['young', [Validators.pattern(/young|middle|elderly/)]],
        dependents: [0, []],
        cityTax: [
          '',
          [
            Validators.min(this.range.cityTax.min),
            Validators.max(this.range.cityTax.max),
          ],
        ],
        otherDeduction: [
          '',
          [
            Validators.min(this.range.otherDeduction.min),
            Validators.max(this.range.otherDeduction.max),
          ],
        ],
      });
      this.formConditions.push(conditionGroup);
    }
  }

  transferData(condition: Condition): Condition {
    return this.conditionsService.transferData(condition);
  }

  submit() {
    this.processing = true;
    const formValue = this.formGroup.value;
    const conditions = formValue.formConditions;
    let formData: Condition[];

    if (formValue.formSelect === 'single') {
      formData = [this.transferData(conditions[0])];
    } else {
      formData = conditions.map((condition) => this.transferData(condition));
    }
    this.conditionsService.setConditions(formData);
    this.viewportScroller.scrollToAnchor('result');
    this.processing = false;
  }
}
