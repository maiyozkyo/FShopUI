import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Fruit } from 'projects/share/src/lib/models/fruit.model';

@Component({
  selector: 'lib-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.scss'],
})
export class FruitsComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
}
