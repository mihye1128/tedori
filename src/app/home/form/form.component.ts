import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  FormArray,
} from '@angular/forms';
import { Condition } from 'src/app/interfaces/condition';
import { AuthService } from 'src/app/services/auth.service';
import { ConditionService } from 'src/app/services/condition.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  user$ = this.authService.afUser$;
  uid: string;

  public formGroup: FormGroup;
  public formConditions = ['first', 'second'];
  public formSelect: 'single' | 'malti';

  dependents = [...Array(7)].map((_, i) => i + 1);
  areas = [
    '北海道',
    '青森県',
    '岩手県',
    '宮城県',
    '秋田県',
    '山形県',
    '福島県',
    '茨城県',
    '栃木県',
    '群馬県',
    '埼玉県',
    '千葉県',
    '東京都',
    '神奈川県',
    '新潟県',
    '富山県',
    '石川県',
    '福井県',
    '山梨県',
    '長野県',
    '岐阜県',
    '静岡県',
    '愛知県',
    '三重県',
    '滋賀県',
    '京都府',
    '大阪府',
    '兵庫県',
    '奈良県',
    '和歌山県',
    '鳥取県',
    '島根県',
    '岡山県',
    '広島県',
    '山口県',
    '徳島県',
    '香川県',
    '愛媛県',
    '高知県',
    '福岡県',
    '佐賀県',
    '長崎県',
    '熊本県',
    '大分県',
    '宮崎県',
    '鹿児島県',
    '沖縄県',
  ];

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private conditionService: ConditionService
  ) {
    this.formGroup = this.fb.group({
      formConditions: this.fb.array([]),
    });

    this.formGroup.addControl(
      'formSelect',
      new FormControl('single', [
        Validators.required,
        Validators.pattern(/single|multi/),
      ])
    );

    this.formConditions.map(() => {
      const conditionGroup = this.fb.group({});

      conditionGroup.addControl(
        'title',
        new FormControl('', [Validators.maxLength(20)])
      );
      conditionGroup.addControl(
        'type',
        new FormControl('monthly', [Validators.pattern(/monthly|hourly/)])
      );
      conditionGroup.addControl(
        'base',
        new FormControl('', [Validators.maxLength(8)])
      );
      conditionGroup.addControl(
        'allowance',
        new FormControl('', [Validators.maxLength(8)])
      );
      conditionGroup.addControl(
        'travelCost',
        new FormControl('', [Validators.maxLength(7)])
      );
      conditionGroup.addControl(
        'basePerHour',
        new FormControl('', [Validators.maxLength(6)])
      );
      conditionGroup.addControl(
        'travelCostPerDay',
        new FormControl('', [Validators.maxLength(5)])
      );
      conditionGroup.addControl(
        'hourPerDay',
        new FormControl('', [Validators.maxLength(2)])
      );
      conditionGroup.addControl(
        'dayPerMonth',
        new FormControl('', [Validators.maxLength(2)])
      );
      conditionGroup.addControl('ins', new FormControl(true, []));
      conditionGroup.addControl('unemploymentIns', new FormControl(true, []));
      conditionGroup.addControl('area', new FormControl('東京都', []));
      conditionGroup.addControl(
        'age',
        new FormControl('young', [Validators.pattern(/young|middle|elderly/)])
      );
      conditionGroup.addControl('dependents', new FormControl(0, []));
      conditionGroup.addControl('cityTax', new FormControl('', []));
      conditionGroup.addControl(
        'otherDeduction',
        new FormControl('', [Validators.maxLength(8)])
      );

      (this.formGroup.get('formConditions') as FormArray).push(conditionGroup);
    });
  }

  ngOnInit(): void {}

  formDataPush(data: Condition[], condition: Condition) {
    data.push({
      title: condition.title,
      type: condition.type,
      base: +condition.base,
      allowance: +condition.allowance,
      travelCost: +condition.travelCost,
      basePerHour: +condition.basePerHour,
      travelCostPerDay: +condition.travelCostPerDay,
      hourPerDay: +condition.hourPerDay,
      dayPerMonth: +condition.dayPerMonth,
      ins: condition.ins,
      unemploymentIns: condition.unemploymentIns,
      area: condition.area,
      age: condition.age,
      dependents: condition.dependents,
      cityTax: +condition.cityTax,
      otherDeduction: +condition.otherDeduction,
      userId: this.authService.uid,
    });
  }

  submit() {
    const formValue = this.formGroup.value;
    const conditions = formValue.formConditions;
    const formData: Condition[] = [];

    if (formValue.formSelect === 'single') {
      this.formDataPush(formData, conditions[0]);
    } else {
      for (const condition of conditions) {
        this.formDataPush(formData, condition);
      }
    }
    this.conditionService.setCalc(formData);
  }

  save() {
    const formValue = this.formGroup.value;
    const conditions = formValue.formConditions;
    const formData: Condition[] = [];

    if (formValue.formSelect === 'single') {
      this.formDataPush(formData, conditions[0]);
    } else {
      for (const condition of conditions) {
        this.formDataPush(formData, condition);
      }
    }
    this.conditionService.saveCondition(formData);
  }
}
