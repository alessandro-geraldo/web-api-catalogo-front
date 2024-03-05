import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Categoria } from './../model/categoria';

const apiUrl = 'https://localhost:44304/Categorias';
var httpOptions = {headers: new HttpHeaders({"Content-Type": "application/json"})};

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getCategorias (): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(apiUrl, httpOptions)
  }

  getCategoria(id: number): Observable<Categoria> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<Categoria>(url).pipe(
    );
  }

  addCategoria (Categoria: Categoria): Observable<Categoria> {
    return this.http.post<Categoria>(apiUrl, Categoria).pipe(
    );
  }

  updateCategoria(id: any, Categoria: Categoria): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, Categoria).pipe(
    );
  }

  deleteCategoria (id: number): Observable<Categoria> {
    const url = `${apiUrl}/${id}`;
    return this.http.delete<Categoria>(url, httpOptions).pipe(
      tap(_ => console.log(`remove o Categoria com id=${id}`)),
      catchError(this.handleError<Categoria>('deleteCategoria'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}