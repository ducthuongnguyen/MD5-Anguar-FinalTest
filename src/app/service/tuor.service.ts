import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Tuor} from "../model/tuor";

@Injectable({
  providedIn: 'root'
})
export class TuorService {

  constructor(private httpClient: HttpClient) {
  }

  findAll(): Observable<Tuor[]> {
    return this.httpClient.get<Tuor[]>(environment.apiUrl + '/tuors');
  }

  findById(id: number): Observable<Tuor> {
    return this.httpClient.get<Tuor>(`${(environment.apiUrl + '/tuors')}/${id}`);
  }

  updateTour(id: string | null | undefined, tour: Tuor): Observable<Tuor> {
    return this.httpClient.put<Tuor>(`${(environment.apiUrl + '/tuors')}/${id}`, tour);
  }

  save(tour: Tuor): Observable<Tuor> {
    return this.httpClient.post<Tuor>(environment.apiUrl + '/tuors', tour);
  }

  delete(id: number): Observable<Tuor> {
    return this.httpClient.delete<Tuor>(`${(environment.apiUrl + '/tuors')}/${id}`);
  }
}
