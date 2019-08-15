import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-greeting-page',
  templateUrl: './greeting-page.component.html',
  styleUrls: ['./greeting-page.component.scss']
})
export class GreetingPageComponent {
  userName: string;

  constructor(
    private router: Router
  ) {}

  goToGamePage() {
    this.router.navigate(['game']);
    window.sessionStorage.setItem('clicker-user-name', this.userName);
  }
}
