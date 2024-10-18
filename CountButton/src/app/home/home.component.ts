import { Component } from '@angular/core';
import { MatButton} from '@angular/material/button';
import { TestService } from '../test.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButton],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(public sharedSvc: TestService){}

  onClick() {
    this.sharedSvc.SharedValue++;
  }
}
