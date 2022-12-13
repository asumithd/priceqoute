import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PriceService {
  URL_API = 'http://localhost:4000/api/price'

  price: any = [];

  constructor(private http: HttpClient) { }

  getPrice() {
    return this.http.get<any[]>(this.URL_API);
  }
  createPrice(price: any) {
    return this.http.post(this.URL_API, price);
  }
  deletePrice(id: string) {
    return this.http.delete(this.URL_API + '/' + id);
  }
  editPrice(price: any) {
    return this.http.put(this.URL_API + '/' + price._id, price);
  }
  bulk(price: any) {
    return this.http.post(this.URL_API + '/test', price);
  }
}
