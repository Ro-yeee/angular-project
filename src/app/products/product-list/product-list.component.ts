import { Component, OnInit, OnDestroy } from '@angular/core';
import { IProducts } from './products.tyes';
import { ProductService } from 'src/app/services/product.service';
import { Subscription } from 'rxjs';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit, OnDestroy {
  constructor(private productService: ProductService) {}

  pageTitle: string = 'Product List';
  showImage: boolean = false;
  sub!: Subscription;

  private _searchQuery: string = '';

  get searchQuery(): string {
    return this._searchQuery;
  }

  set searchQuery(value: string) {
    this._searchQuery = value;
    this.filteredProducts = this.products.filter((item) =>
      item?.productName?.toLowerCase().includes(this._searchQuery.toLowerCase())
    );
  }

  products: IProducts[] = [];

  filteredProducts: IProducts[] = [];

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    this.sub = this.productService.getProducts().subscribe({
      next: (products) => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error: (err) => console.log(err),
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onRatingClicked(message: string): void {
    alert(message);
  }
}
