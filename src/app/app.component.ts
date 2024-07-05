import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'pm-root',
  template:`
  <div><h1>{{pageTitle}}</h1>
  <pm-products></pm-products>
</div>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  pageTitle:string = 'Acme Product Mangement';
}
