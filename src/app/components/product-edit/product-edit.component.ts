import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import {FormBuilder} from '@angular/forms'
import { IProduct } from 'src/app/interfaces/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent {
  product!: IProduct;
 
  constructor (private FormBuilder: FormBuilder,
    private ProductService: ProductService,
    private route : ActivatedRoute
    ){
      this.route.paramMap.subscribe(param=>{
        const id = param.get('id');
        this.ProductService.getProduct(id).subscribe(product=>{
          this.product = product;
          this.productForm.patchValue({
            name:product.name,
            price:product.price,
          })
        })
      })
    }

productForm= this.FormBuilder.group({
name:[''],
price:[0]
})
onHandleEdit(){
if(this.productForm.valid){
  const product: IProduct={
    id: this.product.id,
    name: this.productForm.value.name||"",
    price: this.productForm.value.price||0
  }
  this.ProductService.updateProduct(product).subscribe(data=>{
    console.log(data);
    
  })
}
}
}
