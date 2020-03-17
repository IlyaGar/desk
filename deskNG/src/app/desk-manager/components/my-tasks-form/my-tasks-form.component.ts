import { Component, OnInit, SimpleChanges } from '@angular/core';
import { RequestTask } from '../../models/request-task';
import { TokenService } from 'src/app/common/services/token.service';
import { DeskService } from '../../services/desk.service';
import { SnackbarService } from 'src/app/common/services/snackbar.service';
import { ExchangeService } from 'src/app/common/services/exchange.service';
import { Router, NavigationExtras } from '@angular/router';
import { RequestMenuItem } from '../../models/request-menu-item';
import { MenuItem } from 'src/app/vertical-menu/models/enum-menu-item';

@Component({
  selector: 'app-my-tasks-form',
  templateUrl: './my-tasks-form.component.html',
  styleUrls: ['./my-tasks-form.component.css']
})
export class MyTasksFormComponent implements OnInit {

  listTask: Array<RequestTask> = [];

  timeLeft: number = 60000;
  interval: any;

  messageNoConnect = 'Нет соединения, попробуйте позже.';
  messageStatusTrue = 'Ваша сообщение в обработке.';
  action = 'Ok';
  styleNoConnect = 'red-snackbar';

  constructor(
    private router: Router,
    private deskService: DeskService,
    private tokenService: TokenService,
    private exchangeServece: ExchangeService,
    private snackbarService: SnackbarService,
  ) { }

  ngOnInit() {
    this.loadTasks();
    this.startTimer();
  }

  loadTasks() {
    this.deskService.getRequestTasks(this.tokenService.getLogin()).subscribe(response => {
      this.listTask = response;
    }, 
    error => { 
      console.log(error);
      this.snackbarService.openSnackBar(this.messageNoConnect, this.action, this.styleNoConnect);
    });
  }

  startTimer() {
    this.interval = setInterval(() => {
      this.loadTasks();
    }, this.timeLeft)
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

  openSelectedRequest(requestTask: RequestTask) {
    let requestMenuItem = new RequestMenuItem(requestTask, MenuItem.Theme);
    this.exchangeServece.emit(requestMenuItem);
    const navigationExtras: NavigationExtras = { state: { task: requestTask }};
    this.router.navigate(['/desk/chat'], navigationExtras);
  }

  ngOnDestroy() {
    this.pauseTimer();
  }
}
