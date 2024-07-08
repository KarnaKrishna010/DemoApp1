import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'pm-root',
  template:`
    <nav class='navbar navbar-expand navbar-light bg-light'>
      <a class='navbar-brand'>{{pageTitle}}</a>
      <ul class='nav nav-pills'>
        <li><a class='nav-link' routerLink="/welcome">Home</a></li>
        <li><a class='nav-link'routerLink="/product-list">Product List</a></li>
      </ul>
    </nav>    
    <div class="container">
      <router-outlet></router-outlet>
    </div>  
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  pageTitle:string = 'Acme Product Mangement';
}
