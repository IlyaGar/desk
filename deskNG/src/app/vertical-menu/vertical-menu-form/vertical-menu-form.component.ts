import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from "@angular/common";
import { ExchangeService } from 'src/app/common/services/exchange.service';

@Component({
  selector: 'app-vertical-menu-form',
  templateUrl: './vertical-menu-form.component.html',
  styleUrls: ['./vertical-menu-form.component.css']
})
export class VerticalMenuFormComponent implements OnInit {

  selectValue: string = '';

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

  menuNavigation(event: string) {
    this.selectValue = event;
  }

  whatPathActiv() {
    let path = this.location.path();
    if(path === '/desk/my-tasks')
      this.selectValue = '1';
    if(path === '/desk/new-task')
      this.selectValue = '2';
  }
}
