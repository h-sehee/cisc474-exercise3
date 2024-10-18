import { Component } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [],
  templateUrl: './view.component.html',
  styleUrl: './view.component.scss'
})
export class ViewComponent {
  constructor(public sharedSvc: TestService){}
}
