import { Component } from '@angular/core';
import { Router } from '@angular/router';

enum Result {
  SENIOR = 10,
  MIDDLE = 9,
  JUNIOR = 6
}

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent {
  count: number;
  timer: number;
  gameStarted: boolean;
  result: Result;
  timerTimeout;

  constructor(
    private router: Router
  ) {
    this.count = 0;
    this.timer = 5;
    this.gameStarted = false;
  }

  get gameClass() {
    return {
      'btn-game--start': !this.gameStarted,
      'btn-game--click': this.gameStarted
    };
  }

  onBtnClick() {
    if (!this.gameStarted) {
      this.gameStarted = true;
      this.startTimer();
      return;
    }

    this.count += 1;
  }

  goToGameEndPage(timer: number) {
    const result = this.getResult(timer);
    this.router.navigate(['game-end'], {
      queryParams: {
        count: this.count,
        result
      }
    });
  }

  startTimer() {
    const timer = this.timer;
    this.timerTimeout = setInterval(() => {
      if (this.timer === 0) {
        clearTimeout(this.timerTimeout);
        this.goToGameEndPage(timer);
        this.gameStarted = false;
        return;
      }
      this.timer -= 1;
    }, 1000);
  }

  getResult(timer: number): string {
    const clicksBySeconds = this.count / timer;

    if (clicksBySeconds <= Result.JUNIOR) {
      return Result[Result.JUNIOR];
    }

    if (clicksBySeconds <= Result.MIDDLE) {
      return Result[Result.MIDDLE];
    }

    return Result[Result.SENIOR];
  }


}
