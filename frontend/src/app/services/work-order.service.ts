import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WorkOrderService {

  private baseUrl = "http://localhost:8080/work-order-service";

  constructor(private httpClient: HttpClient) { }

  public getWorkOrdersByUserId() {
    this.httpClient.get(this.baseUrl + '/get-user-orders').subscribe(result => console.log(result));
  }
}
