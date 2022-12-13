import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { PriceService } from 'src/app/services/company.service';

@Component({
  selector: 'app-price-list',
  templateUrl: './price-list.component.html',
  styleUrls: ['./price-list.component.css']
})
export class PriceListComponent implements OnInit {
  userName: any;
  sub: any;
  showObject: any;
  priceDetails: any[] = [];
  spsList: any[] = [
    {
      detailsname: '2000 to 12000 LPH', detailsInch: '1 inch', totalAmount: 139112, details:
        [{
          sn: 1, description: 'PV Panel', specification: 'UTL or Equivalent  335 Watts / 24 V', qty: '4 nos', price: 36180
        },
        {
          sn: 2, description: 'VFD Panel Box', specification: '1HP 3 Phase 110V Mecwin Make', qty: '1 Nos', price: 20608
        },
        {
          sn: 3, description: 'Mounting Structure', specification: 'Aluminium Zinc or Hot Dip Galvanized Coated ( 1.3 kW)', qty: '1 Nos', price: 16680
        },
        {
          sn: 4, description: 'DC Cables (+) (-)', specification: 'Reputed Make DC - Wire 4 sqmm / Single Core Cable ', qty: '30 Mtrs', price: 1352
        },
        {
          sn: 5, description: 'Earth Kit', specification: 'Earthing Cable - Copper 6 sq mm 20 mtr Earth Rode - Copper with Chemical Bag 2 nos', qty: '2 set', price: 3812
        },
        {
          sn: 6, description: 'Others Accessories', specification: 'Reputed Make', qty: '1 set', price: 4508
        },
        {
          sn: 7, description: 'Installation', specification: 'KTA', qty: '1 set', price: 6440
        },
        {
          sn: 8, description: 'Transportation', specification: 'KTA', qty: '1 set', price: 5152
        },
        {
          sn: 9, description: 'Motor & Pump', specification: '1 HP 3 Phase 80 Vac Mecwin Pump Working upto 10 Mtrs', qty: '1 Nos', price: 25760
        },
        {
          sn: 10, description: 'Lighting Arrestor', specification: 'SS 304 Lighting Arrestor, Lighting Arrestor GI Round Post , Earthing Cable - 50 sq mm Aluminium 7 Mtr, Earth Rode - Copper with Chemical Bag', qty: '1 SET', price: 8984
        },
        {
          sn: 11, description: '2.5" HDP Hose', specification: 'Reputed Make', qty: '10 Mtrs', price: 2630
        },
        {
          sn: 12, description: '3 C * 2.5 Sq mm Cable', specification: 'Reputed Make', qty: '15 Mtrs', price: 1310
        },
        {
          sn: 13, description: '14 mm Rope', specification: 'Reputed Make', qty: '15 Mtrs', price: 386
        },
        {
          sn: 14, description: 'Borewell Accessories', specification: 'Reputed Make', qty: '1 Nos', price: 4521
        },
        {
          sn: 15, description: 'CP', specification: 'Reputed Make', qty: '3 L', price: 4648
        }]
    }
  ];
  listFilter: any;

  constructor(private priceService: PriceService, private router: Router) {
    const object = this.router.getCurrentNavigation()
    this.showObject = object?.extras?.state

    console.log(this.showObject?.data.deliveryPerHr);
    let deliveryPerHr = this.showObject?.data.deliveryPerHr

    this.listFilter = this.spsList.filter(i => i.detailsname == deliveryPerHr);
    console.log(this.listFilter);
  }



  ngOnInit(): void {
    this.priceService.getPrice().subscribe((res) => {
      this.priceDetails = res
      console.log(res, 'ressks');
    })

  }

}
