import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TextToImgService {

  url = 'http://140.138.155.230:5000/api/v1/text-to-image';

  constructor(
    private http: HttpClient
  ) { }

  getImage(data: Object) {
    return this.http.post(this.url, data);
  }


}
