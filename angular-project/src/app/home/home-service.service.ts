import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Shoes } from '../interfaces/shoes-interface';

@Injectable({
  providedIn: 'root'
})
export class ShoesService {
  shoesURL = this.baseUrl + 'home';

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  getShoes(): Observable<Shoes[]> {
    return this.http.get<Shoes[]>(this.shoesURL);
  }
  getShoeDetail(shoesId: number): Observable<Shoes> {
    return this.http.get<Shoes>(this.shoesURL + shoesId);
  }
}
