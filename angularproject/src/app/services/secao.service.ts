import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Secao } from '../models/Secao';
import { Response } from '../models/Response';

@Injectable({
  providedIn: 'root'
})
export class SecaoService {

  private apiUrl = `${environment.ApiUrl}/Secao`

constructor(private http: HttpClient) { }

  GetSecoes(): Observable<Response<Secao[]>>{
    return this.http.get<Response<Secao[]>>(this.apiUrl);
  }

  GetSecao(id: number) : Observable<Response<Secao>>{
    return this.http.get<Response<Secao>>(`${this.apiUrl}/${id}`);
  }

  InativarSecao(id: number) :Observable<Response<Secao[]>>{
    return this.http.put<Response<Secao[]>>(`${this.apiUrl}/InativaSecao?id=${id}`, id);
  }

  AtivarSecao(id: number) :Observable<Response<Secao[]>>{
    return this.http.put<Response<Secao[]>>(`${this.apiUrl}/AtivaSecao?id=${id}`, id);
  }


  EditarSecao(secao: Secao): Observable<Response<Secao[]>> {
    return this.http.put<Response<Secao[]>>(`${this.apiUrl}`, secao);
  }


  createSecao(secao: Secao) : Observable<Response<Secao[]>>{
    return this.http.post<Response<Secao[]>>(`${this.apiUrl}`, secao);
  }

  excluirSecao(id: number) :Observable<Response<Secao[]>>{
    return this.http.delete<Response<Secao[]>>(`${this.apiUrl}?id=${id}`);
  }

}
