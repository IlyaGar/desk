import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RequestTask } from 'src/app/desk-manager/models/request-task';
import { AdminService } from '../../services/admin.service';
import { TokenService } from 'src/app/common/services/token.service';
import { SnackbarService } from 'src/app/common/services/snackbar.service';
import { Router, NavigationExtras } from '@angular/router';
import { ExchangeService } from 'src/app/common/services/exchange.service';
import { RequestMenuItem } from 'src/app/desk-manager/models/request-menu-item';
import { MenuItem } from 'src/app/vertical-menu/models/enum-menu-item';

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
    private router: Router,
    private adminService: AdminService,
    private tokenService: TokenService,
    private exchangeServece: ExchangeService,
    private snackbarService: SnackbarService,
  ) { }

  ngOnInit() {
    this.adminService.getArchive(this.tokenService.getLogin(), this.tokenService.getIsAdmin()).subscribe(response => {
      this.listTask = response;
    }, 
    error => { 
      console.log(error);
      this.snackbarService.openSnackBar(this.messageNoConnect, this.action, this.styleNoConnect);
    });
  }

  openSelectedRequest(requestTask: RequestTask) {
    let requestMenuItem = new RequestMenuItem(requestTask, MenuItem.Theme);
    this.exchangeServece.emit(requestMenuItem);
    const navigationExtras: NavigationExtras = { state: { task: requestTask }};
    this.router.navigate(['/admin/chat'], navigationExtras);
  }
}
