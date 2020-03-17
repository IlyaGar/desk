import { Component, OnInit } from '@angular/core';
import { DeskService } from '../../services/desk.service';
import { SnackbarService } from 'src/app/common/services/snackbar.service';
import { TokenService } from 'src/app/common/services/token.service';
import { RequestTask } from '../../models/request-task';
import { ExchangeService } from 'src/app/common/services/exchange.service';
import { Router, NavigationExtras } from '@angular/router';
import { RequestMenuItem } from '../../models/request-menu-item';
import { MenuItem } from 'src/app/vertical-menu/models/enum-menu-item';

@Component({
  selector: 'app-archive-form',
  templateUrl: './archive-form.component.html',
  styleUrls: ['./archive-form.component.css']
})
export class ArchiveFormComponent implements OnInit {

  listTask: Array<RequestTask> = [];
  
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
  }

  loadTasks() {
    this.deskService.getRequestTasksInArchive(this.tokenService.getLogin(), this.tokenService.getIsAdmin()).subscribe(response => {
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
    this.router.navigate(['/desk/chat'], navigationExtras);
  }
}
