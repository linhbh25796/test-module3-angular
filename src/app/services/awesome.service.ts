import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Awesome} from '../interface/awesome';

@Injectable({
  providedIn: 'root'
})
export class AwesomeService {

  constructor(private http: HttpClient) { }

  getAwesome(): Observable<Awesome[]> {
    return this.http.get<Awesome[]>('http://localhost:3000/awesomes');
  }

  awesomeDetail(id: string): Observable<Awesome> {
    return this.http.get<Awesome>(`http://localhost:3000/awesomes/${id}`);
  }
  editAwesome(id: number, awesome: Partial<Awesome>): Observable<Awesome> {
    return this.http.put<Awesome>(`http://localhost:3000/awesomes/${id}`, awesome);
  }


  addAwesome(awesome: Partial<Awesome>): Observable<Awesome> {
    return this.http.post<Awesome>('http://localhost:3000/awesomes', awesome);
  }

  deleteAwesome(id: number): Observable<Awesome> {
    return this.http.delete<Awesome>(`http://localhost:3000/awesomes/${id}`);
  }
}
