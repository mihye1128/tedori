import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { ConditionsService } from 'src/app/services/conditions.service';
import { Condition } from 'src/app/interfaces/condition';
import { areaList } from 'src/app/models/area-list';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.scss'],
})
export class MainFormComponent implements OnInit {
  user$ = this.authService.afUser$;
  maxLength = this.conditionsService.maxLength;
  uid: string;
  formGroup: FormGroup;
  areaList: string[] = areaList;
  dependentsCounts = this.conditionsService.dependentsCounts;
  processing = false;

  private conditionsCount = 2;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private conditionsService: ConditionsService
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
        title: ['', [Validators.maxLength(this.maxLength.title)]],
        type: ['monthly', [Validators.pattern(/monthly|hourly/)]],
        base: [
          '',
          [
            Validators.maxLength(this.maxLength.base),
            Validators.pattern(/^[0-9]*$/),
          ],
        ],
        allowance: [
          '',
          [
            Validators.maxLength(this.maxLength.allowance),
            Validators.pattern(/^[0-9]*$/),
          ],
        ],
        travelCost: [
          '',
          [
            Validators.maxLength(this.maxLength.travelCost),
            Validators.pattern(/^[0-9]*$/),
          ],
        ],
        basePerHour: [
          '',
          [
            Validators.maxLength(this.maxLength.basePerHour),
            Validators.pattern(/^[0-9]*$/),
          ],
        ],
        travelCostPerDay: [
          '',
          [
            Validators.maxLength(this.maxLength.travelCostPerDay),
            Validators.pattern(/^[0-9]*$/),
          ],
        ],
        hourPerDay: [
          '',
          [
            Validators.maxLength(this.maxLength.hourPerDay),
            Validators.pattern(/^[0-9]+(\.[0-9]+)?$/),
          ],
        ],
        dayPerMonth: [
          '',
          [
            Validators.maxLength(this.maxLength.dayPerMonth),
            Validators.pattern(/^[0-9]*$/),
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
            Validators.maxLength(this.maxLength.cityTax),
            Validators.pattern(/^[0-9]*$/),
          ],
        ],
        otherDeduction: [
          '',
          [
            Validators.maxLength(this.maxLength.otherDeduction),
            Validators.pattern(/^[0-9]*$/),
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
    this.processing = false;
  }
}
