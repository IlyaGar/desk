import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RequestTask } from 'src/app/desk-manager/models/request-task';
import { AdminService } from '../../services/admin.service';
import { SnackbarService } from 'src/app/common/services/snackbar.service';
import { TokenService } from 'src/app/common/services/token.service';

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.css']
})
export class RequestFormComponent implements OnInit {

  @Input() requestTask: RequestTask;
  @Output() onDataSelected: EventEmitter<RequestTask> = new EventEmitter<RequestTask>();
  
  selectedValue: any;
  messageText: string ='';
  message: string ='';

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
    this.requestTask.messages;
  }

  onAcceptTask() {
    this.requestTask.admin = this.tokenService.getLogin();
    this.adminService.putNewMessage(this.requestTask).subscribe(response => {
      this.checkResponse(response);
    }, 
    error => { 
      console.log(error);
      this.snackbarService.openSnackBar(this.messageNoConnect, this.action, this.styleNoConnect);
    });
  }

  checkResponse(response: RequestTask) {
    if(response.id > 0) {
      this.onDataSelected.emit(response);
    }
  }
}
