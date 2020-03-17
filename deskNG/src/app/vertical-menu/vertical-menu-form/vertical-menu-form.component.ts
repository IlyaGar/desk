import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from "@angular/common";
import { ExchangeService } from 'src/app/common/services/exchange.service';
import { RequestMenuItem } from 'src/app/desk-manager/models/request-menu-item';
import { RequestTask } from 'src/app/desk-manager/models/request-task';
import { TokenService } from 'src/app/common/services/token.service';
import { MenuItem } from '../models/enum-menu-item';

@Component({
  selector: 'app-vertical-menu-form',
  templateUrl: './vertical-menu-form.component.html',
  styleUrls: ['./vertical-menu-form.component.css']
})
export class VerticalMenuFormComponent implements OnInit {

  selectValue: MenuItem;
  requestTask: RequestTask;
  isAdmin: boolean = false;

  constructor(
    private router: Router,
    private location: Location,
    private tokenService: TokenService,
    private exchangeServece: ExchangeService,
  ) { 
    this.exchangeServece.events$.forEach(event => { console.log(event); this.menuNavigation(event); });
    this.tokenService.events$.forEach(value => { this.checkLogin(value); } );
  }

  ngOnInit() { 
    this.whatPathActiv();
    this.isAdmin = this.tokenService.getIsAdmin() === '0' ? false : true;
  }

  menuNavigation(event: RequestMenuItem) {
    this.selectValue = event.menuItem;
    this.requestTask = event.requestTask;
  }

  checkLogin(value) { 
    this.selectValue = MenuItem.Main;
    this.requestTask = null;
    this.isAdmin = this.tokenService.getIsAdmin() === '0' ? false : true;
  }

  whatPathActiv() {
    // let path = this.location.path();
    // if(path === '/desk' || path === '')
    //   this.selectValue = MenuItem.Main;
    // if(path === '/desk/my-tasks')
    //   this.selectValue = MenuItem.MyTasks;
    // if(path === '/desk/new-task')
    //   this.selectValue = MenuItem.NewTask;
    // if(path === '/desk/archive')
    //   this.selectValue = MenuItem.Archive;
    // if(path === '/admin/create-object')
    //   this.selectValue = MenuItem.CreateNewObject;
    let path = this.location.path();
    switch(this.location.path()) {

      case '/desk' || '':
        this.selectValue = MenuItem.Main;
        break;

      case '/desk/my-tasks':
        this.selectValue = MenuItem.MyTasks;
        break;
      
      case '/desk/new-task':
        this.selectValue = MenuItem.NewTask;
        break; 

      case '/desk/archive':
        this.selectValue = MenuItem.Archive;
        break;

      case '/admin/create-object':
        this.selectValue = MenuItem.CreateNewObject;
        break;  

      // case '/desk' || '':
      //   this.selectValue = MenuItem.Main;
      //   break;

      // case '/desk' || '':
      //   this.selectValue = MenuItem.Main;
      //   break;
    }
  }

  redirectToMyTasks() {
    this.router.navigate(['/desk/my-tasks']);
    this.selectValue = MenuItem.MyTasks;
  }

  redirectToNewTask() {
    this.router.navigate(['/desk/new-task']);
    this.selectValue = MenuItem.NewTask;
  }

  redirectToUserArchive() {
    this.router.navigate(['/desk/archive']);
    this.selectValue = MenuItem.Archive;
  }

  redirectToNewRawTasks() {
    this.router.navigate(['/admin/new-tasks']);
    this.selectValue = MenuItem.NewRawTasks;
  }

  redirectToMyInProcessTasks() {
    this.router.navigate(['/admin/my-in-work']);
    this.selectValue = MenuItem.MyInProcess;
  }

  redirectToAdmineArchive() {
    this.router.navigate(['/admin/archive']);
    this.selectValue = MenuItem.Archive;
  }

  redirectToCreateNewObject() {
    this.router.navigate(['/admin/create-object']);
    this.selectValue = MenuItem.CreateNewObject;
  }
}