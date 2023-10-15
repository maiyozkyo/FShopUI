import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Fruit } from 'projects/share/src/lib/models/fruit.model';

@Component({
  selector: 'lib-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.scss'],
})
export class FruitsComponent implements OnInit {
  constructor(private cdf: ChangeDetectorRef) {}
  lstAvaiableFruits: Fruit[] = [];
  ngOnInit(): void {
    console.log('run fruits');
    this.lstAvaiableFruits.push();
    for (let i = 0; i < 100; i++) {
      let fruit = new Fruit();
      fruit.name = i.toString();
      fruit.price = i * 10;
      fruit.unit = 'kg';
      this.lstAvaiableFruits.push(fruit);
    }
  }

  changeFruitQuantity(fruit: Fruit, isUp: boolean) {
    if (isUp) {
      fruit.quantity += 1;
    } else {
      fruit.quantity -= 1;
    }
    this.cdf.detectChanges();
  }
}
