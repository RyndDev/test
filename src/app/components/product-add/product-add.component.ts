import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import {FormBuilder} from '@angular/forms'
import { IProduct } from 'src/app/interfaces/product';
// import { ProductService } from './../../services/product.service';
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent {
  constructor (private FormBuilder: FormBuilder,
        private ProductService: ProductService){}

  productForm= this.FormBuilder.group({
    name:[''],
    price:[0]
  })
  onHandleSubmit(){
    if(this.productForm.valid){
      const product: IProduct={
        name: this.productForm.value.name||"",
        price: this.productForm.value.price||0
      }
      this.ProductService.addProduct(product).subscribe(data=>{
        console.log(data);
        
      })
    }
  }
  
}
