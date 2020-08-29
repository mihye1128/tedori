import { Component, OnInit, Input } from '@angular/core';
import { Condition } from 'src/app/interfaces/condition';
import { Deductions } from 'src/app/interfaces/deductions';
import { MatDialog } from '@angular/material/dialog';
import { EditDialogComponent } from 'src/app/dialogs/edit-dialog/edit-dialog.component';
import { DeleteDialogComponent } from 'src/app/dialogs/delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-condition-card',
  templateUrl: './condition-card.component.html',
  styleUrls: ['./condition-card.component.scss'],
})
export class ConditionCardComponent implements OnInit {
  @Input() condition: Condition;
  @Input() rate: Deductions;

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  getType(value: string) {
    if (value === 'monthly') {
      return '月給';
    } else {
      return '時給';
    }
  }
  getIns(value: boolean) {
    if (value) {
      return '社会保険加入';
    } else {
      return '社会保険なし';
    }
  }
  getUnemploymentIns(value: boolean) {
    if (value) {
      return '雇用保険加入';
    } else {
      return '雇用保険なし';
    }
  }

  openUpdateDialog(condition: Condition) {
    this.dialog.open(EditDialogComponent, {
      width: '560px',
      autoFocus: false,
      restoreFocus: false,
      data: {
        title: condition.title,
        type: condition.type,
        base: condition.base,
        allowance: condition.allowance,
        travelCost: condition.travelCost,
        basePerHour: condition.basePerHour,
        travelCostPerDay: condition.travelCostPerDay,
        hourPerDay: condition.hourPerDay,
        dayPerMonth: condition.dayPerMonth,
        ins: condition.ins,
        unemploymentIns: condition.unemploymentIns,
        area: condition.area,
        age: condition.age,
        dependents: condition.dependents,
        cityTax: condition.cityTax,
        otherDeduction: condition.otherDeduction,
        id: condition.id,
      },
    });
  }
  openDeleteDialog(condition: Condition) {
    this.dialog.open(DeleteDialogComponent, {
      width: '400px',
      autoFocus: false,
      restoreFocus: false,
      data: {
        title: condition.title,
        id: condition.id,
      },
    });
  }
}
