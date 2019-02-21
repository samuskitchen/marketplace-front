import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <h1 class="text-center">Tienda</h1>
      <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'marketplace';
}
