import { Injectable } from '@angular/core';
import {Category} from "../models/interface-category";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  public host:string="http://localhost:8080"
  constructor(private httpclient:HttpClient) { }

  public getResource(url){
    return this.httpclient.get(this.host+url);

  }
}
