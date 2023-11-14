import {
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
  TemplateRef,
} from '@angular/core';
import { APIService } from '../api.service';

@Component({
  selector: 'lib-fshop-list',
  templateUrl: './fshop-list.component.html',
  styleUrls: ['./fshop-list.component.scss'],
})
export class FshopListComponent implements OnInit {
  constructor(private api: APIService, private df: ChangeDetectorRef) {}

  //#region Template
  @Input() business!: string;
  @Input() method: string = '';
  @Input() params: any[] = [];
  @Input() template!: TemplateRef<any>;
  //#endregion

  //#region Data
  @Input() lstDatas: any[] = [];
  //#endregion

  ngOnInit(): void {
    if (this.method != '') {
      this.api
        .call(this.business, this.method, this.params)
        .subscribe((res: any[]) => {
          this.lstDatas = res;
          console.log('lst datas', this.lstDatas);

          this.df.detectChanges();
        });
    }
  }
}
