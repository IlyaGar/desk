import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ChatService } from '../../services/chat.service';
import { SnackbarService } from 'src/app/common/services/snackbar.service';

export interface DialogData {
  image: File,
  id: number,
}

@Component({
  selector: 'app-image-form',
  templateUrl: './image-form.component.html',
  styleUrls: ['./image-form.component.css']
})
export class ImageFormComponent implements OnInit {

  isImageLoad = false;
  url: any;

  messageNoConnect = 'Нет соединения, попробуйте позже.';
  messageStatusTrue = 'Ваша сообщение в обработке.';
  action = 'Ok';
  styleNoConnect = 'red-snackbar';

  constructor(
    private chatService: ChatService,
    private snackbarService: SnackbarService,
    public dialogRef: MatDialogRef<ImageFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }

  ngOnInit() {
    if(this.data.image) {      
      var reader = new FileReader();
      reader.readAsDataURL(this.data.image);

      reader.onload = (_event) => {
        this.url = reader.result;
      }
    } else {
      this.loadImage(this.data.id);
    }
  }

  loadImage(id: number) {
    this.chatService.getImg(id).subscribe(response => {
      this.createImageFromBlob(response);
    }, 
    error => { 
      console.log(error);
      this.snackbarService.openSnackBar(this.messageNoConnect, this.action, this.styleNoConnect);
    });
  }

  createImageFromBlob(image: Blob) {
    var reader = new FileReader();
    reader.readAsDataURL(image);

    reader.onload = (_event) => { 
      this.url = reader.result;
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
