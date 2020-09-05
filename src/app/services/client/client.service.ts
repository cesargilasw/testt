import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  // Http request to get all clients with mock file
  async getAllClients() {   
    // Mockear una api basica
    return new Promise((resolve,reject) => {  
      this.getJSON('./assets/mocks/clients_mock.json').subscribe((res)=>{
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
