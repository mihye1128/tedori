import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  user$ = this.authService.afUser$;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {}

  mypage() {
    this.router.navigateByUrl('/mypage');
  }
  login() {
    this.authService.login();
  }
  logout() {
    this.authService.logout();
  }
}
