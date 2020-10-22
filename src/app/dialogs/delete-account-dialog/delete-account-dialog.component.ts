import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-delete-account-dialog',
  templateUrl: './delete-account-dialog.component.html',
  styleUrls: ['./delete-account-dialog.component.scss'],
})
export class DeleteAccountDialogComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA)
    private dialogRef: MatDialogRef<DeleteAccountDialogComponent>,
    private snackBar: MatSnackBar,
    private userService: UserService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  deleteUserAccount() {
    this.userService.deleteUserAccount(this.authService.uid).then(() => {
      this.dialogRef.close();
      this.snackBar.open(
        'アカウントを削除しました。反映には時間がかかります。'
      );
      this.router.navigateByUrl('/');
    });
  }
}
