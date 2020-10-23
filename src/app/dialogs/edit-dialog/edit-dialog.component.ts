import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Condition } from 'src/app/interfaces/condition';
import { ConditionsService } from 'src/app/services/conditions.service';
import { AREA_LIST } from 'src/app/models/area-list';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss'],
})
export class EditDialogComponent implements OnInit {
  readonly areaList: string[] = AREA_LIST;
  readonly range = this.conditionsService.range;
  readonly dependents = this.conditionsService.dependentsCounts;
  readonly titleMaxLength = this.conditionsService.titleMaxLength;

  form: FormGroup;
  processing = false;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: Condition,
    private dialogRef: MatDialogRef<EditDialogComponent>,
    private fb: FormBuilder,
    private conditionsService: ConditionsService
  ) {
    this.buildForm();
  }

  ngOnInit(): void {}

  buildForm() {
    this.form = this.fb.group({
      title: [this.data.title, [Validators.maxLength(this.titleMaxLength)]],
      type: [this.data.type, [Validators.pattern(/monthly|hourly/)]],
      ins: [this.data.ins, []],
      unemploymentIns: [this.data.unemploymentIns, []],
      area: [this.data.area, []],
      age: [this.data.age, [Validators.pattern(/young|middle|elderly/)]],
      dependents: [this.data.dependents, []],
    });

    Object.entries(this.range).forEach(([key, _]) => {
      this.form.addControl(
        key,
        new FormControl(this.data[key], [
          Validators.min(this.range[key].min),
          Validators.max(this.range[key].max),
          Validators.pattern(/^[0-9]\d*$/),
        ])
      );
    });
  }

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
        this.conditionsService.updateConditions.push(editedCondition);
        this.dialogRef.close();
      });
  }
}
