import { Component } from '@angular/core';
import { Product } from '../../entities/product';
import { Router } from '@angular/router';
import { arr } from '../../entities/test-products';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-olympiads',
  imports: [CommonModule],
  templateUrl: './olympiads.component.html',
  styleUrl: './olympiads.component.scss',
})
export class OlympiadsComponent {
  products: any[] = arr;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigateProduct(product: any) {
    // const id = product.id;
    // this.router.navigate([`competition/details/p/overview`], {
    //   queryParams: { productId: id },
    // });

    console.log("dev mode")
  }

  navigateCompetitions() {
    // this.router.navigate(['default/products']);
    console.log("dev mode")
  }
}
