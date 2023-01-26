import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

interface Data {
  username: string;
  email: string;
}


@Injectable({
  providedIn: 'root'
})
export class DatosService {

  Myurl = "https://jsonplaceholder.typicode.com/users";

  constructor(private http: HttpClient) { }
  data?: Data[];

  compareData(username: string, email: string): Observable<boolean> {
    return this.http.get<Data[]>(this.Myurl).pipe(
      map(data => {
        for (let user of data) {
          if (user.username === username && user.email === email) {
            this.data = data;
            return true;
          }
        }
        return false;
      })
    );
  }
}
