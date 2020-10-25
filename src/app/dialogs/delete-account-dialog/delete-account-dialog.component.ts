import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AngularFireFunctions } from '@angular/fire/functions';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-delete-account-dialog',
  templateUrl: './delete-account-dialog.component.html',
  styleUrls: ['./delete-account-dialog.component.scss'],
})
export class DeleteAccountDialogComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<DeleteAccountDialogComponent>,
    private snackBar: MatSnackBar,
    private authService: AuthService,
    private router: Router,
    private fns: AngularFireFunctions
  ) {}

  ngOnInit(): void {}

  async deleteUserAccount() {
    const callable = this.fns.httpsCallable('deleteAfUser');

    return callable(this.authService.uid)
      .toPromise()
      .then(() => {
        this.router.navigateByUrl('/');
        this.authService.afAuth.signOut().then(() => {
          this.snackBar.open(
            'アカウントを削除しました。反映には時間がかかります。'
          );
        });
        this.dialogRef.close();
      });
  }
}
