import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  constructor() { }
  serverUrl = 'http://140.138.155.230:5000';
}
