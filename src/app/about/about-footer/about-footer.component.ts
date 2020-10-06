import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-about-footer',
  templateUrl: './about-footer.component.html',
  styleUrls: ['./about-footer.component.scss'],
})
export class AboutFooterComponent implements OnInit {
  constructor(public authService: AuthService) {}

  ngOnInit(): void {}
}
