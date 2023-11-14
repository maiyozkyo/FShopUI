import { Component, OnInit } from '@angular/core';
import { APIService } from 'projects/share/src/lib/api.service';
import { Car } from 'projects/share/src/lib/models/car.model';
import { Fruit } from 'projects/share/src/lib/models/fruit.model';
import { User } from 'projects/share/src/lib/models/user.model';

@Component({
  selector: 'lib-managements',
  templateUrl: './managements.component.html',
  styleUrls: ['./managements.component.scss'],
})
export class ManagementsComponent implements OnInit {
  //#region Selection
  curTab: any;
  curData: any[] = [];
  //#endregion
  // #region Config
  lstTabs = [
    {
      text: 'Mặt hàng',
      icon: 'bi bi-apple',
      value: '1',
    },
    {
      text: 'Người dùng',
      icon: 'bi bi-people',
      value: '2',
    },
    { text: 'Xe cộ', icon: 'bi bi-car-front', value: '3' },
    {
      text: 'Đơn vị tính',
      icon: 'bi bi-box',
      value: '4',
    },
    { text: 'Fake Fruit', icon: 'bi bi-copy', value: '5' },
  ];
  //#endregion

  //#region Data
  business = 'Fruit';
  method = 'GetListFruits';
  params: any[] = [];
  page = 0;
  lstFruits: Fruit[] = [];
  lstUsers: User[] = [];
  lstCars: Car[] = [];
  //#endregion

  constructor(private api: APIService) {
    this.curTab = this.lstTabs[0];
    this.params.push(this.page);
  }
  ngOnInit(): void {}
  changeTab(tab: any) {
    this.curTab = tab;
    if (tab.value == '5') {
      this.fakeData();
    }
  }

  fakeData() {
    this.api.call('Fruit', 'FakeFruits', []).subscribe((res) => {
      console.log('fake result', res);
    });
  }
}
