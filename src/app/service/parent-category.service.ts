import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ParentCategory} from "../model/parent-category";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ParentCategoryService {
  private API_URL = environment.apiUrl +'categories'

  constructor(private httpClient: HttpClient) {
  }


}
