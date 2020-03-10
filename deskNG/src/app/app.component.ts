import { Component } from '@angular/core';
import { TokenService } from './common/services/token.service';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';
import { ExchangeService } from './common/services/exchange.service';
import { Location } from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'desk-mile';
  isLogin: boolean = false;
  
  constructor(
    private tokenService: TokenService,
  ) {
      this.tokenService.events$.forEach(value => { this.checkLogin(value); } );
  }

  checkLogin(value) { 
    this.isLogin = value;
  }
}
