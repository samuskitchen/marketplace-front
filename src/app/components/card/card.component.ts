import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
      <div class="card" style="width: 18rem;">
        <img [src]="product.image" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">{{product.name}}</h5>
          <p class="card-text">{{product.description | slice:0:30}}...</p>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
            Ver Detalle
          </button>
          <button type="button" class="btn btn-primary">
            Agregar
          </button>
        </div>
      </div>

      <app-detail-product></app-detail-product>
  `,
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() product: any;
  constructor() { }

  ngOnInit() {
  }

}
