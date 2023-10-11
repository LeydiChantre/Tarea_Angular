import { Component } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = [...products];

  share(nombre: string) {
    console.log('El producto '+ nombre+' se ha compartido');
  }
  onNotify(){
    console.log('Se le notificará cuando el producto salga a la venta');
  }
}


