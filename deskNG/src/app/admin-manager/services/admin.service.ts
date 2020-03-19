import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequestTask } from 'src/app/desk-manager/models/request-task';
import { Message } from 'src/app/desk-manager/models/message';
import { Shop } from '../models/object-item';
import { Status } from 'src/app/common/models/status';
import { Department } from '../models/departnent';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private url = "https://localhost:44346/api/values";
  private urlShop = "https://localhost:44346/api/shops";
  private urlDep = "https://localhost:44346/api/departments";

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

  getObjects(): Observable<Array<Shop>> {
    return this.http.get<Array<Shop>>(`${this.urlShop}`);
  }

  createObjects(data: Shop): Observable<Status> {
    return this.http.post<Status>(`${this.urlShop}`, data);
  }

  getDepartment(): Observable<Array<Department>> {
    return this.http.get<Array<Department>>(`${this.urlDep}`);
  }

  createDepartment(data: Department): Observable<Status> {
    return this.http.post<Status>(`${this.urlDep}`, data);
  }

  // getRequestTasksInArchive(data: string, admin: string): Observable<Array<RequestTask>> {
  //   return this.http.get<Array<RequestTask>>(`${this.urlRequest +'/' + data + '/' + admin + '/' + 'archive'}`);
  // }
}
