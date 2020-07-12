import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  user$ = this.authService.afUser$;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {}

  home() {
    this.router.navigateByUrl('/');
  }
  mypage() {
    this.router.navigateByUrl('/mypage');
  }
  login() {
    this.authService.login();
  }
}
