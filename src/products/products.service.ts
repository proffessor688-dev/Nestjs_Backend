import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
  private products = [
    {
      id: 1,
      name: 'iPhone 15',
      price: 80000,
    },
    {
      id: 2,
      name: 'Samsung S24',
      price: 70000,
    },
    {
      id: 3,
      name: 'MacBook Air',
      price: 120000,
    },
  ];
  getAllProducts() {
    return this.products;
  }
}
