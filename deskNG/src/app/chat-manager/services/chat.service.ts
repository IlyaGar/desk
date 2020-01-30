import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message } from 'src/app/desk-manager/models/message';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private urlMessage = "https://localhost:44346/api/messages";
  private urlImage = "https://localhost:44346/api/images";

  constructor(private http: HttpClient) { }

  postNewMessage(data: FormData): Observable<any> {
    return this.http.post<Array<Message>>(`${this.urlMessage}`, data);
  }

  getMessages(id: number): Observable<Array<Message>> {
    return this.http.get<Array<Message>>(`${this.urlMessage + '/' + id}`);
  }

  getImg(id: number): Observable<any> {        
    const headers = new HttpHeaders({
      'Content-Type': 'application/octet-stream',
      'Accept': 'application/octet-stream'
    });
    return this.http.get<any>(`${this.urlImage + '/' + id}`, { headers: headers, responseType: 'blob' as 'json' });
  }
}
