import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
      <div class="card" style="width: 18rem;">
        <img [src]="product.image" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">{{product.name}}</h5>
          <span id="currency-custom">{{product.price | currency:product.currency$}}</span>
          <p class="card-text">{{product.description | slice:0:40}}...</p>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal"
              (click)="selectedProduct.emit(id)">
              Ver Detalle
            </button>
            <button type="button" class="btn btn-primary" (click)="addCardProduct.emit(product.id)">
              Agregar
            </button>
          </div>
        </div>
      </div>
  `,
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() product: any;
  @Input() id: any;
  @Output() selectedProduct = new EventEmitter();
  @Output() addCardProduct = new EventEmitter();
 
  constructor() { }

  ngOnInit() {
  }

}
