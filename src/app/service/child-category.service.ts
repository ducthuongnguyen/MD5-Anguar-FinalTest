import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ParentCategory} from "../model/parent-category";
import {ChildCategory} from "../model/child-category";

@Injectable({
  providedIn: 'root'
})
export class ChildCategoryService {
  private API_URL = environment.apiUrl + 'categories'

  constructor(private httpClient: HttpClient) {
  }

  findAllChildCategory(): Observable<ChildCategory[]> {
    return this.httpClient.get<ChildCategory[]>(this.API_URL);
  }
}
