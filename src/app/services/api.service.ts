import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface ApiRequest {
  service: string;
  payload?: Record<string, unknown>;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
}

@Injectable({ providedIn: 'root' })
export class ApiService {
  private http = inject(HttpClient);
  private baseUrl = environment.apiUrl;

  request<T>(request: ApiRequest): Observable<ApiResponse<T>> {
    const { service, payload, method = 'POST' } = request;
    const url = `${this.baseUrl}/${service}`;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    if (method === 'GET' && payload) {
      const params = new URLSearchParams(payload as Record<string, string>);
      return this.http.get<ApiResponse<T>>(`${url}?${params}`, { headers });
    }

    return this.http.request<ApiResponse<T>>(method, url, { headers, body: payload });
  }

  get<T>(service: string, params?: Record<string, unknown>): Observable<ApiResponse<T>> {
    return this.request<T>({ service, payload: params, method: 'GET' });
  }

  post<T>(service: string, payload?: Record<string, unknown>): Observable<ApiResponse<T>> {
    return this.request<T>({ service, payload });
  }
}