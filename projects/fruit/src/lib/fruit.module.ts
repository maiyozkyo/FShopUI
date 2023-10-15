import { NgModule } from '@angular/core';
import { FruitComponent } from './fruit.component';
import { FruitsComponent } from './fruits/fruits.component';
import { ShareModule } from 'projects/share/src/public-api';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [FruitComponent, FruitsComponent],
  imports: [ShareModule, CommonModule],
  exports: [FruitComponent, FruitsComponent],
})
export class FruitModule {}
