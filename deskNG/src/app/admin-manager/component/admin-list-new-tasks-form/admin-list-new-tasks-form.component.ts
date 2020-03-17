import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RequestTask } from 'src/app/desk-manager/models/request-task';
import { TokenService } from 'src/app/common/services/token.service';
import { SnackbarService } from 'src/app/common/services/snackbar.service';
import { AdminService } from '../../services/admin.service';
import { RequestMenuItem } from 'src/app/desk-manager/models/request-menu-item';
import { MenuItem } from 'src/app/vertical-menu/models/enum-menu-item';
import { ExchangeService } from 'src/app/common/services/exchange.service';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'admin-list-new-tasks-form',
  templateUrl: './admin-list-new-tasks-form.component.html',
  styleUrls: ['./admin-list-new-tasks-form.component.css']
})
export class AdminListNewTasksFormComponent implements OnInit {
  
  timeLeft: number = 60;
  interval: any;
  listTask: Array<RequestTask> = [];

  messageNoConnect = 'Нет соединения, попробуйте позже.';
  messageStatusTrue = 'Ваша сообщение в обработке.';
  action = 'Ok';
  styleNoConnect = 'red-snackbar';

  constructor(
    private router: Router,
    private adminService: AdminService,
    private tokenService: TokenService,
    private exchangeServece: ExchangeService,
    private snackbarService: SnackbarService,
  ) { }

  ngOnInit() {
    this.loadTasks();
    this.startTimer();
  }

  ngOnDestroy() {
    this.pauseTimer();
  }

  loadTasks() {
    this.adminService.getNewRequestTasksOpenByAdmin(this.tokenService.getLogin(), this.tokenService.getIsAdmin()).subscribe(response => {
      this.listTask = response.filter(x => x.status === 'new');
    }, 
    error => { 
      console.log(error);
      this.snackbarService.openSnackBar(this.messageNoConnect, this.action, this.styleNoConnect);
    });
  }

  startTimer() {
    this.interval = setInterval(() => {
      this.loadTasks();
    }, 60000)
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

  openSelectedRequest(requestTask: RequestTask) {
    let requestMenuItem = new RequestMenuItem(requestTask, MenuItem.Theme);
    this.exchangeServece.emit(requestMenuItem);
    const navigationExtras: NavigationExtras = { state: { task: requestTask }};
    this.router.navigate(['/admin/chat'], navigationExtras);
  }
}
