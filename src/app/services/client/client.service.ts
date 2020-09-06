import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators'
import { Client } from 'src/app/classes/Client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  // Http request to get all clients with mock file
  async getAllClients() {   
    // Mockear una api basica
    // Pipe
    return new Promise((resolve,reject) => {  
      this.getJSON('./assets/mocks/clients_mock.json').pipe(
        map((x: any) => new Client (x) )
      ).subscribe((res)=>{
        if (res) {
          resolve(res);
        }
      },(err) => {
        reject(err);
      });
    });

  }

  /**
  * getJSON - Get a mock JSON data
  * @param locationFile - Location of JSON file to get data
  */
  getJSON(locationFile: string): Observable<any> {      
    return this.http.get(locationFile);
  }

}
