import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {
  public product: any;
  public detail = [];
  public value = [];

  @Input() set currentProduct(data: any) { 
     this.product = data;
     this.value = Object.values(data.detail);
     this.detail = Object.keys(data.detail);
   };
  constructor() { }

  ngOnInit() {
  }

}
