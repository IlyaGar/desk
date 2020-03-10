import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExchangeService {

  private _subject = new Subject<any>();
  private _subject_login = new Subject<any>();

  emit(event) {
    this._subject.next(event);
  }

  get events$ () {
    return this._subject.asObservable();
  }

  emit_login(event) {
    this._subject_login.next(event);
  }

  get events_login$ () {
    return this._subject_login.asObservable();
  }
}
