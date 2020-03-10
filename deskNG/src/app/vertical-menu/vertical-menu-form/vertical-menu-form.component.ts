import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from "@angular/common";
import { ExchangeService } from 'src/app/common/services/exchange.service';

export enum MenuItem {
  MyTasks = 1,
  NewTask,
  RawTasks,
  MyInProcess,
  Archive,
  Theme,
}

@Component({
  selector: 'app-vertical-menu-form',
  templateUrl: './vertical-menu-form.component.html',
  styleUrls: ['./vertical-menu-form.component.css']
})
export class VerticalMenuFormComponent implements OnInit {

  selectValue: MenuItem;

  constructor(
    private router: Router,
    private location: Location,
    private exchangeServece: ExchangeService,
  ) { 
    this.exchangeServece.events$.forEach(event => { console.log(event); this.menuNavigation(event); });
  }

  ngOnInit() {
    this.whatPathActiv();
  }

  menuNavigation(event: MenuItem) {
    this.selectValue = event;
  }

  whatPathActiv() {
    let path = this.location.path();
    if(path === '/desk/my-tasks')
      // this.selectValue = '1';
      this.selectValue = MenuItem.MyTasks;
    if(path === '/desk/new-task')
      // this.selectValue = '2';
      this.selectValue = MenuItem.NewTask;
    if(path === '/desk/archive')
      // this.selectValue = '2';
      this.selectValue = MenuItem.Archive;
  }

  redirectToMyTasks() {
    this.router.navigate(['/desk/my-tasks']);
    this.selectValue = MenuItem.MyTasks;
  }

  redirectToNewTask() {
    this.router.navigate(['/desk/new-task']);
    this.selectValue = MenuItem.NewTask;
  }

  redirectToArchive() {
    this.router.navigate(['/desk/archive']);
    this.selectValue = MenuItem.Archive;
  }
}