import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-game-end-page',
  templateUrl: './game-end-page.component.html',
  styleUrls: ['./game-end-page.component.scss']
})
export class GameEndPageComponent {
  userName: string;
  score: number;
  result: string;
  gameEnd: boolean;

  constructor(
    private route: ActivatedRoute
  ) {
    this.gameEnd = false;
    this.result = this.route.snapshot.queryParams.result;
    this.score = this.route.snapshot.queryParams.count;
    this.userName = window.sessionStorage.getItem('clicker-user-name');
  }

  endGame() {
    this.gameEnd = true;
  }

}
