import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators';
// import { HttpClientModule } from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class BankDataService {
  domain: string = 'http://vast-shore-74260.herokuapp.com/banks?city=';
  constructor(private http: Http) { }
  getallBankDetails(CityName) {
    return this.http.get(this.domain + CityName, '').pipe(map(res => res.json()))//map(res => res.json());
  }
}
