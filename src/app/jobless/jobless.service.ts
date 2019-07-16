import { Injectable } from '@angular/core';
import { Jobless } from 'src/models/jobless.model';


@Injectable({
  providedIn: 'root'
})
export class JoblessService {
  private jobs:Jobless[]=[
    {
      id:'j1',
      title:'chaise',
      detail:'la fabrique des informaticiens, reseu et devla fabrique des informaticiens, reseu et devla fabrique des informaticiens, reseu et devla fabrique des informaticiens, reseu et dev',
      category:'science',
      city:'kinshasa',
      pictures:[
        './assets/img/jobless1/ap.jpg'
      ],
      start:5,
      telephone:'0817454018',
      aviable:true,
      type:'Livraison',
      feed:8,
      prix:45,
      state:"neuf"
    },
    {
      id:'j2',
      title:'meuble de bureau',
      detail:'la fabrique des informaticiens, reseu et devla fabrique des informaticiens, reseu et devla fabrique des informaticiens, reseu et devla fabrique des informaticiens, reseu et dev',
      category:'science',
      city:'kinshasa',
      pictures:[
        './assets/img/jobless1/ap.jpg'
      ],
      start:4,
      telephone:'0817454018',
      aviable:true,
      type:'Livraison',
      feed:20,
      prix:25,
      state:"neuf",
    },
    {
      id:'j2',
      title:'meuble de bureau',
      detail:'la fabrique des informaticiens, reseu et devla fabrique des informaticiens, reseu et devla fabrique des informaticiens, reseu et devla fabrique des informaticiens, reseu et dev',
      category:'science',
      city:'kinshasa',
      pictures:[
        './assets/img/jobless1/ap.jpg'
      ],
      start:4,
      telephone:'0817454018',
      aviable:true,
      type:'Livraison',
      feed:20,
      prix:25,
      state:"neuf",
    },
    {
      id:'j2',
      title:'meuble de bureau',
      detail:'la fabrique des informaticiens, reseu et devla fabrique des informaticiens, reseu et devla fabrique des informaticiens, reseu et devla fabrique des informaticiens, reseu et dev',
      category:'science',
      city:'kinshasa',
      pictures:[
        './assets/img/jobless1/ap.jpg'
      ],
      start:4,
      telephone:'0817454018',
      aviable:true,
      type:'Livraison',
      feed:20,
      prix:25,
      state:"neuf",
    },
    {
      id:'j2',
      title:'meuble de bureau',
      detail:'la fabrique des informaticiens, reseu et devla fabrique des informaticiens, reseu et devla fabrique des informaticiens, reseu et devla fabrique des informaticiens, reseu et dev',
      category:'science',
      city:'kinshasa',
      pictures:[
        './assets/img/jobless1/ap.jpg'
      ],
      start:4,
      telephone:'0817454018',
      aviable:true,
      type:'Livraison',
      feed:20,
      prix:25,
      state:"neuf",
    }
  ];
  constructor() { }
  getAllJobless(){
    return this.jobs;
  }
  getonJob(joblessId:string){
    return this.jobs.find(job=>{
      return job.id=== joblessId;
    })
  }
}
