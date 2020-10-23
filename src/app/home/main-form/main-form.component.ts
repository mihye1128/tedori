import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import {
  FormGroup,
  FormBuilder,
  FormArray,
  Validators,
  FormControl,
} from '@angular/forms';
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
  readonly dependentsCounts = this.conditionsService.dependentsCounts;
  readonly areaList: string[] = AREA_LIST;

  uid: string;
  formGroup: FormGroup;
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
        ins: [true, []],
        unemploymentIns: [true, []],
        area: ['東京都', []],
        age: ['young', [Validators.pattern(/young|middle|elderly/)]],
        dependents: [0, []],
      });

      Object.entries(this.range).forEach(([key, _]) => {
        conditionGroup.addControl(
          key,
          new FormControl('', [
            Validators.min(this.range[key].min),
            Validators.max(this.range[key].max),
            Validators.pattern(/^[0-9]\d*$/),
          ])
        );
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
    const conditions: Condition[] = formValue.formConditions;
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
