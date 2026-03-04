import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AnalyticService {

  private baseUrl: string = 'https://blv-cassia-saas-api.onrender.com/api/v1';

  constructor(private readonly http: HttpClient) { }
  
  public getQuotationRanking(from: string, to: string): Observable<any> {
    const url = `${this.baseUrl}/analytics/quotations/ranking?from=${from}&to=${to}`;
    return this.http.get(url);
  }

}
