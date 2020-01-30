import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MessageToService } from '../../models/message-to-service';
import { DeskService } from '../../services/desk.service';
import { TokenService } from 'src/app/common/services/token.service';
import { SnackbarService } from 'src/app/common/services/snackbar.service';
import { RequestTask } from '../../models/request-task';

@Component({
  selector: 'app-list-person-request-form',
  templateUrl: './list-person-request-form.component.html',
  styleUrls: ['./list-person-request-form.component.css']
})
export class ListPersonRequestFormComponent implements OnInit {

  @Output() onDataSelected: EventEmitter<RequestTask> = new EventEmitter<RequestTask>();
  
  timeLeft: number = 60;
  interval: any;
  listTask: Array<RequestTask> = [];

  messageNoConnect = 'Нет соединения, попробуйте позже.';
  messageStatusTrue = 'Ваша сообщение в обработке.';
  action = 'Ok';
  styleNoConnect = 'red-snackbar';

  constructor(
    private deskService: DeskService,
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
    }, 60000)
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

  onOpenChat(requestTask: RequestTask) {
    this.onDataSelected.emit(requestTask);
  }
}
