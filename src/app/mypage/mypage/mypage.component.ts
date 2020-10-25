import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteAccountDialogComponent } from 'src/app/dialogs/delete-account-dialog/delete-account-dialog.component';
import { SeoService } from 'src/app/services/seo.service';

@Component({
  selector: 'app-mypage',
  templateUrl: './mypage.component.html',
  styleUrls: ['./mypage.component.scss'],
})
export class MypageComponent implements OnInit {
  constructor(private seoService: SeoService, private dialog: MatDialog) {
    this.seoService.setTitleAndMeta(
      'マイページ',
      '保存した条件の一覧を確認できます。'
    );
  }

  ngOnInit(): void {}

  openDeleteAccountDialog() {
    this.dialog.open(DeleteAccountDialogComponent, {
      width: '400px',
      autoFocus: false,
      restoreFocus: false,
    });
  }
}
