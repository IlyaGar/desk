import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessageToService } from '../models/message-to-service';
import { Observable } from 'rxjs';
import { RequestTask } from '../models/request-task';
import { Message } from '../models/message';

@Injectable({
  providedIn: 'root'
})
export class DeskService {

  private urlRequest = "https://localhost:44346/api/values";
  private urlMessage = "https://localhost:44346/api/messages";

  constructor(private http: HttpClient) { }

  postNewRequest(data: FormData): Observable<any> {
    return this.http.post<any>(`${this.urlRequest}`, data);
  }
  
  getRequestTasks(data: string): Observable<Array<RequestTask>> {
    return this.http.get<Array<RequestTask>>(`${this.urlRequest +'/' + data}`);
  }

  getMessages(id: number): Observable<Array<Message>> {
    return this.http.get<Array<Message>>(`${this.urlMessage + '/' + id}`);
  }

  putRequestTaskInDecision(data: RequestTask): Observable<RequestTask> {
    return this.http.put<RequestTask>(`${this.urlRequest +'/' + data.status}`, data);
  }
}
