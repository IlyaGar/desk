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

  getRequestTasksOpenByAdmin(data: string, admin: string): Observable<Array<RequestTask>> {
    return this.http.get<Array<RequestTask>>(`${this.url +'/' + data + '/' + admin + '/' + 'my'}`);
  }

  getNewRequestTasksOpenByAdmin(data: string, admin: string): Observable<Array<RequestTask>> {
    return this.http.get<Array<RequestTask>>(`${this.url +'/' + data + '/' + admin + '/' + 'new'}`);
  }

  getArchive(data: string, admin: string): Observable<Array<RequestTask>> {
    return this.http.get<Array<RequestTask>>(`${this.url +'/' + data + '/' + admin + '/' + 'archive'}`);
  }

  // getRequestTasksInArchive(data: string, admin: string): Observable<Array<RequestTask>> {
  //   return this.http.get<Array<RequestTask>>(`${this.urlRequest +'/' + data + '/' + admin + '/' + 'archive'}`);
  // }
}
