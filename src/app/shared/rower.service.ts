import { Injectable } from '@angular/core';
import { Rower } from './rower.model'
import {HttpClient} from '@angular/common/http';
const BASE_URL = 'https://jsonserverrowerapi.herokuapp.com/rowers';
import { Observable, BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class RowerService {

  constructor(private http: HttpClient) { }

  getRowers(): Observable<any> {
    return this.http.get(`${BASE_URL}`)

  }

}
