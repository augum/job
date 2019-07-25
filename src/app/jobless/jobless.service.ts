import { Injectable } from '@angular/core';
import { Jobless } from 'src/models/jobless.model';
import {HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
/* le service exploite les données de la table product de Bdd*/ 
export class JoblessService {
  jobs;
  public host:string="http://localhost:8080";
  constructor(private  http:HttpClient) { }
  //cette methode recupère les ressources dans la BD
  public getResource(url){
    return this.http.get(this.host+url);
  }
  getonJob(joblessId:string,url){
    /*return this.jobs.find(job=>{
      return job.id=== joblessId;
    })*/
    return this.http.get(this.host+url+joblessId);
  }
}
