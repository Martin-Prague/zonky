import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {

  private proxyUrl: string;
  private domain: string;
  private apiMarketPath: string;
  private batchSize: number;

  constructor(private http: HttpClient) {
    this.proxyUrl = 'https://crossorigin.me/';
    this.domain = 'https://api.zonky.cz';
    this.apiMarketPath = '/loans/marketplace';
    this.batchSize = 1000;
  }
  getMarketLoans() {
    const httpOptions = {
      headers: new HttpHeaders({
        'x-size': this.batchSize.toString(),
      })
    };

    return this.http
      .get(this.domain + this.apiMarketPath, httpOptions).toPromise();
  }
}
