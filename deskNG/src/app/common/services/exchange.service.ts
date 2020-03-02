import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExchangeService {

  private _subject = new Subject<any>();

  emit(event) {
    this._subject.next(event);
  }

  get events$ () {
    let t = this._subject.asObservable();
    return this._subject.asObservable();
  }
}
