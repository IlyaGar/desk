import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessageToService } from '../models/message-to-service';
import { Observable } from 'rxjs';
import { RequestTask } from '../models/request-task';
import { Message } from '../models/message';
import { environment } from 'src/environments/environment';
import { Shop } from 'src/app/admin-manager/models/object-item';

@Injectable({
  providedIn: 'root'
})
export class DeskService {

  private urlRequest = "https://localhost:44346/api/values";
  private urlMessage = "https://localhost:44346/api/messages";
  private urlShop = "https://localhost:44346/api/shops";

  private urlLogout = environment.apiUrl + "/wms/pushdctorder/";

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

  getRequestTasksInArchive(data: string, admin: string): Observable<Array<RequestTask>> {
    return this.http.get<Array<RequestTask>>(`${this.urlRequest +'/' + data + '/' + admin + '/' + 'archive'}`);
  }

  putRequestTaskInDecision(data: RequestTask): Observable<RequestTask> {
    return this.http.put<RequestTask>(`${this.urlRequest +'/' + data.status}`, data);
  }

  getObjects(): Observable<Array<Shop>> {
    return this.http.get<Array<Shop>>(`${this.urlShop}`);
  }
}
