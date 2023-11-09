import { Component, OnInit } from '@angular/core';
import { IProducts } from './products.tyes';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  constructor(private productService: ProductService) {}

  pageTitle: string = 'Product List';
  showImage: boolean = false;

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
    this.products = this.productService.getProducts()
    this.filteredProducts =this.products
  }

  onRatingClicked(message: string): void {
    alert(message);
  }
}
