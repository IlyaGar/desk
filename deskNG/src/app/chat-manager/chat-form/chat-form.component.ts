import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { TokenService } from 'src/app/common/services/token.service';
import { SnackbarService } from 'src/app/common/services/snackbar.service';
import { Status } from 'src/app/common/models/status';
import { RequestTask } from 'src/app/desk-manager/models/request-task';
import { Message } from 'src/app/desk-manager/models/message';
import { ChatService } from '../services/chat.service';
import { MatDialog } from '@angular/material/dialog';
import { ImageFormComponent } from '../dialog-windows/image-form/image-form.component';
import { Picture } from 'src/app/desk-manager/models/picture';

@Component({
  selector: 'app-chat-form',
  templateUrl: './chat-form.component.html',
  styleUrls: ['./chat-form.component.css']
})
export class ChatFormComponent implements OnInit {

  @Input() requestTask: RequestTask;
  @ViewChild('btScroll', { static: false }) chatForm?: ElementRef<HTMLElement>; 
  
  timeLeft: number = 60;
  interval: any;

  value: string = '';
  message: string = '';
  listMessage: Array<Message> = [];
  files: Array<File> = [];
  file: File;
  urls: Array<any> = [];
  url: any;
  isImageLoad = false;
  newMessage: Message;

  messageNoConnect = 'Нет соединения, попробуйте позже.';
  messageStatusTrue = 'Ваша сообщение в обработке.';
  action = 'Ok';
  styleNoConnect = 'red-snackbar';

  constructor(
    public dialog: MatDialog,
    private chatService: ChatService,
    private tokenService: TokenService,
    private snackbarService: SnackbarService,
  ) { }

  ngOnInit() {
    this.requestTask;
    this.loadTasks();
    this.startTimer();
    
  }

  ngOnDestroy() {
    this.pauseTimer();
  }

  loadTasks() {
    this.chatService.getMessages(this.requestTask.id).subscribe(response => {
      this.listMessage = response;
    }, 
    error => { 
      console.log(error);
      this.snackbarService.openSnackBar(this.messageNoConnect, this.action, this.styleNoConnect);
    });
  }

  startTimer() {
    this.interval = setInterval(() => {
      this.loadTasks();
    }, 60000)
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

  onPushMessage() {
    if(this.message) {
      let formData = new FormData(); 
      if(this.files.length > 0) {
        for(let i = 0; i < this.files.length; i++) {
          formData.append('file', this.files[i], this.files[i].name);
        }
      }
      this.newMessage = new Message(0, this.message, this.tokenService.getLogin(), '', this.requestTask.id, null);
      formData.append("message", JSON.stringify(this.newMessage));
      console.log(formData.getAll('file'));
      console.log(formData.getAll('message'));
      this.chatService.postNewMessage(formData).subscribe(response => {
        this.checkResponsePushMessage(response);
      }, 
      error => { 
        console.log(error);
        this.snackbarService.openSnackBar(this.messageNoConnect, this.action, this.styleNoConnect);
      });
      this.message = '';
      this.scrollToBottom();
    }
  }

  checkResponsePushMessage(response: number) {
    if(response > 0) {
      this.snackbarService.openSnackBar(this.messageStatusTrue, this.action);
      this.newMessage.id = response;
      this.listMessage.push(this.newMessage);
    }
  }

  pastePicture(event) {
    if(this.files.length < 4) {
      var item = (event.clipboardData || event.originalEvent.clipboardData).items[0] || null;
      if (item && item.kind === "file" && item.type.indexOf("image") !== -1) {
        var file = item.getAsFile(),
        data = new FormData();

        data.append('file', file);
        this.files.push(file);
        this.isImageLoad = true;
        
        var reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = (_event) => { // called once readAsDataURL is completed
          this.url = reader.result;
          var url = reader.result;
          this.urls.push(url);
        }
      }
    }
  }

  onDeleteImage(id: number) {
    if(this.files) {
      if(id > -1) {
        if(this.files[id]) {
          this.files.splice(id, 1);
          this.urls.splice(id, 1);
          if(this.urls.length === 0)
            this.isImageLoad = false;
        }
      }
    }
  }

  onOpenImageForm(id: number, image: Picture): void {
    const dialogRef = this.dialog.open(ImageFormComponent, {
      width: '85vw',
      height: '85vh',
      data: { image: this.files[id], id: image.id},
    });
    dialogRef.afterClosed().subscribe(result => { });
  }

  scrollToBottom(): void {
    setTimeout(() => this.chatForm.nativeElement.click(), 2000);
  }

  ngAfterViewInit() {
    this.scrollToBottom();
  }
}
