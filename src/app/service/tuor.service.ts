import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Tuor} from "../model/tuor";

@Injectable({
  providedIn: 'root'
})
export class TuorService {
  private API_URL = environment.apiUrl;

  constructor(private httpClient: HttpClient) {
  }

  findAll(): Observable<Tuor[]>{
    return this.httpClient.get<Tuor[]>(this.API_URL);
  }

  findById(id: string | null): Observable<Tuor> {
    return this.httpClient.get<Tuor>(`${(this.API_URL)}/${id}`);
  }

  updateTour(id: string | null | undefined, tour: Tuor): Observable<Tuor> {
    return this.httpClient.put<Tuor>(`${(this.API_URL)}/${id}`, tour);
  }

  save(tour: Tuor): Observable<Tuor> {
    return this.httpClient.post<Tuor>(this.API_URL, tour);
  }

  delete(id: string | null | undefined): Observable<Tuor> {
    return this.httpClient.delete<Tuor>(`${(this.API_URL)}/${id}`);
  }
}
