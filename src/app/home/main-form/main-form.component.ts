import { Component, OnInit, Input } from '@angular/core';
import { Deductions } from 'src/app/interfaces/deductions';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { ConditionsService } from 'src/app/services/conditions.service';
import { Condition } from 'src/app/interfaces/condition';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.scss'],
})
export class MainFormComponent implements OnInit {
  @Input() rate: Deductions;

  user$ = this.authService.afUser$;
  uid: string;
  formGroup: FormGroup;
  dependentsCounts = [...Array(7)].map((_, i) => i + 1);

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
        title: ['', [Validators.maxLength(20)]],
        type: ['monthly', [Validators.pattern(/monthly|hourly/)]],
        base: ['', [Validators.maxLength(8)]],
        allowance: ['', [Validators.maxLength(8)]],
        travelCost: ['', [Validators.maxLength(7)]],
        basePerHour: ['', [Validators.maxLength(6)]],
        travelCostPerDay: ['', [Validators.maxLength(5)]],
        hourPerDay: ['', [Validators.maxLength(2)]],
        dayPerMonth: ['', [Validators.maxLength(2)]],
        ins: [true, []],
        unemploymentIns: [true, []],
        area: ['東京都', []],
        age: ['young', [Validators.pattern(/young|middle|elderly/)]],
        dependents: [0, []],
        cityTax: ['', []],
        otherDeduction: ['', [Validators.maxLength(8)]],
      });
      this.formConditions.push(conditionGroup);
    }
  }

  transferData(condition: Condition): Condition {
    const base = condition.type === 'monthly' ? +condition.base : 0;
    const allowance = condition.type === 'monthly' ? +condition.allowance : 0;
    const travelCost = condition.type === 'monthly' ? +condition.travelCost : 0;
    const basePerHour =
      condition.type === 'hourly' ? +condition.basePerHour : 0;
    const travelCostPerDay =
      condition.type === 'hourly' ? +condition.travelCostPerDay : 0;
    const hourPerDay = condition.type === 'hourly' ? +condition.hourPerDay : 0;
    const dayPerMonth =
      condition.type === 'hourly' ? +condition.dayPerMonth : 0;
    return {
      title: condition.title,
      type: condition.type,
      base,
      allowance,
      travelCost,
      basePerHour,
      travelCostPerDay,
      hourPerDay,
      dayPerMonth,
      ins: condition.ins,
      unemploymentIns: condition.unemploymentIns,
      area: condition.area,
      age: condition.age,
      dependents: condition.dependents,
      cityTax: +condition.cityTax,
      otherDeduction: +condition.otherDeduction,
      userId: this.authService.uid,
    };
  }

  submit() {
    const formValue = this.formGroup.value;
    const conditions = formValue.formConditions;
    let formData: Condition[];

    if (formValue.formSelect === 'single') {
      formData = [this.transferData(conditions[0])];
    } else {
      formData = conditions.map((condition) => this.transferData(condition));
    }
    this.conditionsService.setConditions(formData);
  }
}
