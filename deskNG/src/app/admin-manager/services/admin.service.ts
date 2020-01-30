import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequestTask } from 'src/app/desk-manager/models/request-task';
import { Message } from 'src/app/desk-manager/models/message';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private url = "https://localhost:44346/api/values";

  constructor(private http: HttpClient) { }

  putNewMessage(data: RequestTask): Observable<RequestTask> {
    return this.http.put<RequestTask>(`${this.url}`, data);
  }

  getRequestTasksOpenByAdmin(data: string): Observable<Array<RequestTask>> {
    return this.http.get<Array<RequestTask>>(`${this.url +'/' + data + '/' + 'my'}`);
  }

  getNewRequestTasksOpenByAdmin(data: string): Observable<Array<RequestTask>> {
    return this.http.get<Array<RequestTask>>(`${this.url +'/' + data + '/' + 'new'}`);
  }

  getArchive(data: string): Observable<Array<RequestTask>> {
    return this.http.get<Array<RequestTask>>(`${this.url +'/' + data + '/' + 'archive'}`);
  }
}
