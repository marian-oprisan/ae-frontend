import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class CallService {

  constructor(private http: Http) { }

  getCalls() {
    return this.http.get('http://localhost:3000/get-calls/')
            .map((response: Response) => response.json());
  }
}
