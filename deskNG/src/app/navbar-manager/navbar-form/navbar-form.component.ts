import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginResponse } from 'src/app/login-manager/models/login-response';
import { LogoutStatus } from 'src/app/login-manager/models/logout-status';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment.prod';
import { TokenService } from 'src/app/common/services/token.service';
import { Location } from "@angular/common";
import { ExchangeService } from 'src/app/common/services/exchange.service';

@Component({
  selector: 'app-navbar-form',
  templateUrl: './navbar-form.component.html',
  styleUrls: ['./navbar-form.component.css']
})
export class NavbarFormComponent implements OnInit {

  cookieName = environment.cookieName;
  isLogin: boolean = false;
  loginResponse = new LoginResponse("", "", "", "", "", "");
  logoutStatus: LogoutStatus;

  isPersonal = false; 
  isMap = false; 
  isOrder = false;
  
  constructor(
    private router: Router,
    private location: Location,
    private tokenService: TokenService,
    private cookieService: CookieService,
    private exchangeServece: ExchangeService,
  ) { 
      // this.tokenService.events$.forEach(value => { this.checkLogin(value); } );
      this.exchangeServece.events_login$.forEach(value => { this.checkLogin(value); } );
  }

  ngOnInit() {
    this.loginUser();
  }

  loginUser() {
    if(this.cookieService.check(this.cookieName)){
      let fullData = this.cookieService.get(this.cookieName);
      let loginFromCookie = JSON.parse(fullData);
      if(loginFromCookie){
        this.loginResponse = loginFromCookie;
        this.isLogin = true;
        this.tokenService.logEvent(true);
        if(this.loginResponse.adminCount === '1')
          this.router.navigate(['/admin']);
        else 
          this.router.navigate(['/desk']);
      }
    }
    else {
      this.isLogin = false;
      this.router.navigate(['/login']);
    }
  }

  onLogOut() {
    this.isLogin = false;
    this.tokenService.deleteCookie();
    this.tokenService.logEvent(false);
    this.loginResponse = null;
    if(this.cookieService.check(this.cookieName)){
      let fullData = this.cookieService.get(this.cookieName);
      let loginFromCookie = JSON.parse(fullData);
      if(loginFromCookie){
        this.loginResponse = loginFromCookie;
        this.isLogin = true;
        this.tokenService.logEvent(true);
      }
    }
    this.router.navigate(['/login']); 
  }

  checkLogin(value) { 
    this.isLogin = value;
    if(this.isLogin)
      this.loginUser();
  }

  isPathActiv(path: string) {
    return (path === this.location.path()) ? true : false;
  }
}
