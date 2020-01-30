import { Component, OnInit, Input } from '@angular/core';
import { DeskService } from '../../services/desk.service';
import { TokenService } from 'src/app/common/services/token.service';
import { SnackbarService } from 'src/app/common/services/snackbar.service';
import { MessageToService } from '../../models/message-to-service';
import { Status } from 'src/app/common/models/status';
import { LoginResponse } from 'src/app/login-manager/models/login-response';

@Component({
  selector: 'app-new-request-form',
  templateUrl: './new-request-form.component.html',
  styleUrls: ['./new-request-form.component.css']
})
export class NewRequestFormComponent implements OnInit {

  shops: string[] = [ "Выбрать...", "Долгиновский", "Брест", "Горка", "Независимости" ];
  shopSelected: string = 'Выбрать...';
  selectedValue: any;

  @Input() data: LoginResponse;
  
  theme: string ='';
  message: string ='';
  shop: string ='';
  phone: string ='';
  fileToUpload: File = null;
  fileName: string = '';
  isDisabled: boolean = true;
  isInputTheme: boolean = true;

  messageNoConnect = 'Нет соединения, попробуйте позже.';
  messageStatusTrue = 'Ваша сообщение в обработке.';
  action = 'Ok';
  styleNoConnect = 'red-snackbar';

  constructor(
    private deskService: DeskService,
    private tokenService: TokenService,
    private snackbarService: SnackbarService,
  ) { }

  ngOnInit() {
  }

  onPushMessage() {
    if(this.message) {
      let formData = new FormData(); 
      this.fileToUpload ? formData.append('file', this.fileToUpload, this.fileToUpload.name) : null;
      formData.append("message", JSON.stringify(
        new MessageToService(this.tokenService.getToken(), undefined, this.tokenService.getLogin(), this.theme, this.message, '', this.phone)
      ));
      console.log(formData.getAll('file'));
      console.log(formData.getAll('message'));
      this.deskService.postNewRequest(formData).subscribe(response => {
        this.checkResponsePushMessage(response);
      }, 
      error => { 
        console.log(error);
        this.snackbarService.openSnackBar(this.messageNoConnect, this.action, this.styleNoConnect);
      });
      this.message = '';
    }
  }

  checkResponsePushMessage(response: Status) {
    if(response.status === "true") {
      this.snackbarService.openSnackBar(this.messageStatusTrue, this.action);
    }
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    this.fileName = this.fileToUpload.name;
  }

  pastePicture(event) {
    this.fileToUpload = null;
    this.fileName = '';
    var item = (event.clipboardData || event.originalEvent.clipboardData).items[0] || null;
    if (item && item.kind === "file" && item.type.indexOf("image") !== -1) {
      var file = item.getAsFile();
      this.fileToUpload = file;
      this.fileName = this.fileToUpload.name;
    }
  }

  updateWorkout(event) {
    this.selectedValue = event;
  }
}
