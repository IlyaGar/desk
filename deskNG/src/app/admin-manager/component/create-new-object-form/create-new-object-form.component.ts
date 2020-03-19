import { Component, OnInit } from '@angular/core';
import { SnackbarService } from 'src/app/common/services/snackbar.service';
import { AdminService } from '../../services/admin.service';
import { TokenService } from 'src/app/common/services/token.service';
import { Shop } from '../../models/object-item';
import { Department } from '../../models/departnent';
import { Status } from 'src/app/common/models/status';

@Component({
  selector: 'app-create-new-object-form',
  templateUrl: './create-new-object-form.component.html',
  styleUrls: ['./create-new-object-form.component.css']
})
export class CreateNewObjectFormComponent implements OnInit {

  objectName: string;
  selectedObjectItem: Shop;

  departmentName: string;
  departmentPhone: string;

  objectPanelOpenState = false;
  departmentPanelOpenState = false;
  updatePanelOpenState = false;

  objects: Array<Shop> = [];
  departments: Array<Department> = [];

  messageNoConnect = 'Нет соединения, попробуйте позже.';
  messageStatusTrue = 'Ваша сообщение в обработке.';
  action = 'Ok';
  styleNoConnect = 'red-snackbar';
  
  constructor(
    private adminService: AdminService,
    private tokenService: TokenService,
    private snackbarService: SnackbarService,
  ) { }

  ngOnInit() {
    this.loadObjectList();
    this.loadDepartmentList();
  }

  loadObjectList() {
    this.adminService.getObjects().subscribe(response => {
      this.objects = response;
    }, 
    error => { 
      console.log(error);
      this.snackbarService.openSnackBar(this.messageNoConnect, this.action, this.styleNoConnect);
    });
  }

  onCreateObject(name: string) {
    if(name.length > 0) {
      let filterValue = this.objects.find(x => x.name == name);
      if(!filterValue) {
        this.adminService.createObjects(new Shop(0, name, null)).subscribe(response => {
          if(this.checkObjectResponse(response)) {
            this.loadObjectList();
            this.objectName = '';
          }
        }, 
        error => { 
          console.log(error);
          this.snackbarService.openSnackBar(this.messageNoConnect, this.action, this.styleNoConnect);
        });
      }
    } 
  }

  checkObjectResponse(response: Status) : boolean {
    if(response.status === 'Ok')
      return true;
    else return false;  
  }

  selectObject(event: Shop) {
    this.selectedObjectItem = event;
  }

  loadDepartmentList() {
    this.adminService.getDepartment().subscribe(response => {
      this.departments = response;
    }, 
    error => { 
      console.log(error);
      this.snackbarService.openSnackBar(this.messageNoConnect, this.action, this.styleNoConnect);
    });
  }

  onCreateDepartment(name: string, phone: string) {
    if(name.length > 0) {
      this.selectedObjectItem = null;
      if(this.selectedObjectItem.name.length > 0) {
        this.adminService.createDepartment(new Department(0, name, phone, this.selectedObjectItem.id)).subscribe(response => {
          if(this.checkDepatmentResponse(response)) {
            this.snackbarService.openSnackBar(`Отдел ${name} добавлен.`, this.action);
            this.selectedObjectItem = null;
            this.departmentName = '';
            this.departmentPhone = '';
          }
        }, 
        error => { 
          console.log(error);
          this.snackbarService.openSnackBar(this.messageNoConnect, this.action, this.styleNoConnect);
        });
      } else {}
    } else {}
  }

  checkDepatmentResponse(response: Status) : boolean {
    if(response.status === 'Ok')
      return true;
    else  {
      this.snackbarService.openSnackBar(response.status, this.action, this.styleNoConnect);
      return false;  
    }
  }
}
