import { Component, OnInit, Input } from '@angular/core';
import { RequestTask } from 'src/app/desk-manager/models/request-task';

@Component({
  selector: 'app-theme-info-form',
  templateUrl: './theme-info-form.component.html',
  styleUrls: ['./theme-info-form.component.css']
})
export class ThemeInfoFormComponent implements OnInit {

  @Input() requestTask: RequestTask;
  
  constructor() { }

  ngOnInit() {
    let v = this.requestTask;
  }

  ngOnDestroy() {
    this.requestTask = null;
  }
}
