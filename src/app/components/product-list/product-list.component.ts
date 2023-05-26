import { Component } from '@angular/core';
import { IProduct } from './../../interfaces/product';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products:IProduct[]=[]
  constructor(private productService :ProductService){
    this.productService.getProducts().subscribe(data=>{
      this.products = data
    },error=> console.log(error));
    
  }
  removeItem(id:any){
    this.productService.deleteProduct(id).subscribe(()=>{
      this.products = this.products.filter(item=> item.id!== id)
    }, (error)=>{
      console.log(error.message);
      
    })
  }
}
