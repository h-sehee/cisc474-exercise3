import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  public SharedValue: number = 5;
  constructor() { }
}
