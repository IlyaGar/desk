import { Component, OnInit, Output, EventEmitter, Input, SimpleChanges } from '@angular/core';
import { RequestTask } from '../../models/request-task';
import { DeskService } from '../../services/desk.service';
import { TokenService } from 'src/app/common/services/token.service';
import { SnackbarService } from 'src/app/common/services/snackbar.service';
import { ExchangeService } from 'src/app/common/services/exchange.service';

@Component({
  selector: 'app-list-tasks-form',
  templateUrl: './list-tasks-form.component.html',
  styleUrls: ['./list-tasks-form.component.css']
})
export class ListTasksFormComponent implements OnInit {

  @Input() data: Array<RequestTask>;
  @Output() onDataSelected: EventEmitter<RequestTask> = new EventEmitter<RequestTask>();
  
  listTask: Array<RequestTask> = [];

  constructor() { }

  ngOnInit() {
  }
  
  ngOnChanges(changes: SimpleChanges) {
    this.listTask = changes.data.currentValue;
  }

  onOpenChat(requestTask: RequestTask) {
    this.onDataSelected.emit(requestTask);
  }
}
