import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RequestTask } from 'src/app/desk-manager/models/request-task';
import { TokenService } from 'src/app/common/services/token.service';
import { SnackbarService } from 'src/app/common/services/snackbar.service';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-admin-list-accepted-form',
  templateUrl: './admin-list-accepted-form.component.html',
  styleUrls: ['./admin-list-accepted-form.component.css']
})
export class AdminListAcceptedFormComponent implements OnInit {

  @Output() onDataSelected: EventEmitter<RequestTask> = new EventEmitter<RequestTask>();
  
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
    this.adminService.getRequestTasksOpenByAdmin(this.tokenService.getLogin()).subscribe(response => {
      this.listTask = response.filter(x => x.admin === this.tokenService.getLogin());
    }, 
    error => { 
      console.log(error);
      this.snackbarService.openSnackBar(this.messageNoConnect, this.action, this.styleNoConnect);
    });
  }

  onOpenChat(requestTask: RequestTask) {
    this.onDataSelected.emit(requestTask);
  }
}
