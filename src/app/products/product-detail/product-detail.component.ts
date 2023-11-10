import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { IProducts } from '../product-list/products.tyes';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  pageTitle: string = 'Product';
  product: IProducts | undefined;
  id!: number;

  onBack(): void {
    this.router.navigate(['/products']);
  }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(this.id);
    (this.pageTitle = this.pageTitle + `: ${this.id}`),
      this.productService.getProducts().subscribe({
        next: (products) => {
          this.product = products.filter(
            (item) => item.productId === this.id
          )[0];
        },
      });
  }
}
