import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RequestTask } from 'src/app/desk-manager/models/request-task';
import { DeskService } from 'src/app/desk-manager/services/desk.service';
import { TokenService } from 'src/app/common/services/token.service';
import { SnackbarService } from 'src/app/common/services/snackbar.service';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-admin-list-all-form',
  templateUrl: './admin-list-all-form.component.html',
  styleUrls: ['./admin-list-all-form.component.css']
})
export class AdminListAllFormComponent implements OnInit {

  @Output() onDataSelected: EventEmitter<RequestTask> = new EventEmitter<RequestTask>();
  
  timeLeft: number = 60;
  interval: any;
  listTask: Array<RequestTask> = [];

  messageNoConnect = 'Нет соединения, попробуйте позже.';
  messageStatusTrue = 'Ваша сообщение в обработке.';
  action = 'Ok';
  styleNoConnect = 'red-snackbar';

  constructor(
    private adminService: AdminService,
    private tokenService: TokenService,
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
    this.adminService.getNewRequestTasksOpenByAdmin(this.tokenService.getLogin()).subscribe(response => {
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

  onOpenChat(requestTask: RequestTask) {
    this.onDataSelected.emit(requestTask);
  }
}
