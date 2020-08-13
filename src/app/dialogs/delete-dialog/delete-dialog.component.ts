import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ConditionsService } from 'src/app/services/conditions.service';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss'],
})
export class DeleteDialogComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      title: string;
      id: string;
    },
    private dialogRef: MatDialogRef<DeleteDialogComponent>,
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

  deleteCondition(id: string) {
    this.conditionsService.deleteCondition(id).then(() => {
      this.dialogRef.close();
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
