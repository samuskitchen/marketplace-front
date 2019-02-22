import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  public products: Array<any>
  public currentProduct = null;

  constructor(private productService: ProductService) { }

  selectedProduct(id) { 
    this.currentProduct = this.products[id];  
    console.log(this.products[id])
  }

  addCardProduct(productId) { 
    this.productService.addCardProduct(productId);
  }

  ngOnInit() {
    this.productService.getAllProducts().subscribe(result => this.products = result)
  }

}
