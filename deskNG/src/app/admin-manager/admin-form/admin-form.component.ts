import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RequestTask } from 'src/app/desk-manager/models/request-task';

@Component({
  selector: 'app-admin-form',
  templateUrl: './admin-form.component.html',
  styleUrls: ['./admin-form.component.css']
})
export class AdminFormComponent implements OnInit {

  selectValue: string = '';
  theme: string = '';
  requestTask: RequestTask;

  constructor() { }

  ngOnInit() {
    this.selectValue  = '1';
  }

  openSelectedRequestInfo(requestTask: RequestTask) {
    this.selectValue  = '4';
    this.theme = requestTask.theme;
    this.requestTask = requestTask;
  }
  
  openSelectedRequest(requestTask: RequestTask) {
    this.selectValue  = '5';
    this.theme = requestTask.theme;
    this.requestTask = requestTask;
  }
}
