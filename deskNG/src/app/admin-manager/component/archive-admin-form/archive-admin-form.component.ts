import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RequestTask } from 'src/app/desk-manager/models/request-task';
import { AdminService } from '../../services/admin.service';
import { TokenService } from 'src/app/common/services/token.service';
import { SnackbarService } from 'src/app/common/services/snackbar.service';

@Component({
  selector: 'app-archive-admin-form',
  templateUrl: './archive-admin-form.component.html',
  styleUrls: ['./archive-admin-form.component.css']
})
export class ArchiveAdminFormComponent implements OnInit {

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
    this.adminService.getArchive(this.tokenService.getLogin()).subscribe(response => {
      this.listTask = response;
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
