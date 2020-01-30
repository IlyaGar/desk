import { Component, OnInit, ViewChild } from '@angular/core';
import { DeskService } from '../services/desk.service';
import { MessageToService } from '../models/message-to-service';
import { SnackbarService } from 'src/app/common/services/snackbar.service';
import { Status } from 'src/app/common/models/status';
import { TokenService } from 'src/app/common/services/token.service';
import { RequestTask } from '../models/request-task';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-desk-form',
  templateUrl: './desk-form.component.html',
  styleUrls: ['./desk-form.component.css']
})
export class DeskFormComponent implements OnInit {

  selectValue: string = '';

  timeLeft: number = 60;
  interval: any;

  theme: string = '';
  message: string = '';
  requestTask: RequestTask;

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
    this.selectValue  = '1';
  }

  openSelectedRequest(requestTask: RequestTask) {
    this.selectValue  = '4';
    this.theme = requestTask.theme;
    this.requestTask = requestTask;
  }

  onDecision() {
    this.requestTask.status = 'decision';
    this.deskService.putRequestTaskInDecision(this.requestTask).subscribe(response => {
      // this.checkResponsePushMessage(response);
      var r = response;
    }, 
    error => { 
      console.log(error);
      this.snackbarService.openSnackBar(this.messageNoConnect, this.action, this.styleNoConnect);
    });
  }
}
