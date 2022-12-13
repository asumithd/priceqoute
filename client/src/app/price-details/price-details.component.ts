import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PriceService } from '../services/company.service';
// import jsPDF from 'jspdf';
// import autoTable from 'jspdf-autotable'
declare let jsPDF: any;
@Component({
  selector: 'app-price-details',
  templateUrl: './price-details.component.html',
  styleUrls: ['./price-details.component.css']
})
export class PriceDetailsComponent implements OnInit {
  categories = [{ id: 1, name: 'Solar Water Pump' }, { id: 2, name: 'Solar On Grid' }]
  categoryTypes = [{ cateId: 1, id: 1, name: 'Bore Well' }, { cateId: 1, id: 2, name: 'Open Well' }, { cateId: 2, id: 3, name: '1KW On Grid System' }, { cateId: 1, id: 4, name: 'Canal' }]
  chooseTypes = [{ id: 1, name: 'Need Average Water Ltr' }, { id: 5, name: 'Inch Level' }, { id: 2, name: 'Total Depth' }, { id: 4, name: 'Water Level Stand' }, { id: 3, name: 'Moter Capacity Stand Level' }]
  category = ''
  categoryType = ''
  chooseType = ''
  inchLeval = ''
  boreSize = ''
  totalDepth = ''
  acre = ''
  waterIrrigation = ''
  deliveryPerHr = ''
  accessories = ''
  crap = ''
  pumpLowringDepth = ''
  customerName = ''
  customerNo = ''
  customerEmail = ''
  waterLevel = ''
  pincodeNo = ''
  newObj: any = {}
  deliverSizeFilter: any[] = []
  pVPanel: any = false
  vFDPanelBox: any = false
  mountingStructure: any = false
  dCCables: any = false
  earthKit: any = false
  othersAccessories: any = false
  installation: any = false
  transportation: any = false
  motorPump: any = false
  lightingArrestor: any = false
  hDPHose25: any = false
  cable3CX25Sqmm: any = false
  rope16mm: any = false
  borewellAccessories: any = false
  categoryTypeFilter: any = [];
  boreSizes: any = ['4 inch', '6 inch', '7 inch', '8 inch'];
  deliveryPerHrs: any = [

    {
      panel: '3 Nos', inch: '1 inch', name: '2000 to 12000 LPH'
    },
    {
      panel: '3 Nos', inch: '2 inch', name: '2000 to 12000 LPH'
    },
    {
      panel: '4 Nos', inch: '2 inch', name: '3000 to 15000 LPH'
    },
    {
      panel: '4 Nos', inch: '1.25 inch', name: '2500 to 3000 LPH'
    },
    {
      panel: '4 Nos', inch: '1 inch', name: '1000 to 1500 LPH'
    },
    {
      panel: '7 Nos', inch: '2.5 inch', name: '5000 to 25000 LPH'
    },
    {
      panel: '7 Nos', inch: '1.25 inch', name: '3500 to 7000 LPH'
    },
    {
      panel: '7 Nos', inch: '1 inch', name: '1500 to 3000 LPH'
    },
    {
      panel: '7 Nos', inch: '1 inch', name: '1000 to 1500 LPH'
    },
    {
      panel: '10 Nos', inch: '2.5 inch', name: '12000 to 30000 LPH'
    },
    {
      panel: '10 Nos', inch: '1.5 inch', name: '12000 to 30000 LPH'
    },
    {
      panel: '10 Nos', inch: '1.5 inch', name: '6000 to 12000 LPH'
    },
    {
      panel: '10 Nos', inch: '1.5 inch', name: '3000 to  9000 LPH'
    },
    {
      panel: '10 Nos', inch: '1.25 inch', name: '1000 to  2500 LPH'
    },
    {
      panel: '10 Nos', inch: '1 inch', name: '600 to  1500 LPH'
    },
    {
      panel: '16 Nos', inch: '2 inch', name: '12000 to 40000 LPH'
    },
    {
      panel: '16 Nos', inch: '2.5 inch', name: '12000 to 40000 LPH'
    },
    {
      panel: '16 Nos', inch: '2 inch', name: '15000 LPH'
    },
    {
      panel: '16 Nos', inch: '1.5 inch', name: '12000 LPH'
    },
    {
      panel: '16 Nos', inch: '1.5 inch', name: '75000 LPH'
    },
    {
      panel: '16 Nos', inch: '1.25 inch', name: '1500 to 4000 LPH'
    },
    {
      panel: '16 Nos', inch: '1 inch', name: '750 to 2000 LPH'
    },
    {
      panel: '24 Nos', inch: '2 inch', name: '15000 to 50000 LPH'
    },
    {
      panel: '24 Nos', inch: '3 inch', name: '15000 to 50000 LPH'
    },
    {
      panel: '24 Nos', inch: '2 inch', name: '25000 LPH'
    },
    {
      panel: '24 Nos', inch: '2 inch', name: '18000 LPH'
    },
    {
      panel: '24 Nos', inch: '2 inch', name: '12000 LPH'
    },
    {
      panel: '24 Nos', inch: '1.5 inch', name: '8000 LPH'
    },
    {
      panel: '24 Nos', inch: '1.25 inch', name: '3000 to 6000 LPH'
    },
    {
      panel: '30 Nos', inch: '2.5 inch', name: '20000 to 60000 LPH'
    },
    {
      panel: '30 Nos', inch: '3 inch', name: '20000 to 60000 LPH'
    },
    {
      panel: '30 Nos', inch: '2 inch', name: '35000 LPH'
    },
    {
      panel: '30 Nos', inch: '2 inch', name: '25000 LPH'
    },
    {
      panel: '30 Nos', inch: '2 inch', name: '18000 LPH'
    },
    {
      panel: '30 Nos', inch: '2 inch', name: '18000 LPH'
    },
    {
      panel: '30 Nos', inch: '1.5 inch', name: '3600 to 7500 LPH'
    }

  ];
  modelFilter: any = [
    '1 HP 100Ft Model',
    '1 HP 200Ft Model',
    '1 HP 300Ft Model',
    '2 HP 100Ft Model',
    '2 HP 200Ft Model',
    '2 HP 300Ft Model',
    '2 HP 450Ft Model',
    '3 HP 100Ft Model',
    '3 HP 200Ft Model',
    '3 HP 300Ft Model',
    '3 HP 500Ft Model',
    '3 HP 700Ft Model',
    '5 HP 100Ft Model',
    '5 HP 200Ft Model',
    '5 HP 300Ft Model',
    '5 HP 500Ft Model',
    '5 HP 800Ft Model',
    '5 HP 1000Ft Model',
    '7.5 HP 100Ft Model',
    '7.5 HP 200Ft Model',
    '7.5 HP 300Ft Model',
    '7.5 HP 500Ft Model',
    '7.5 HP 800Ft Model',
    '7.5 HP 1000Ft Model',
    '10 HP 100Ft Model',
    '10 HP 200Ft Model',
    '10 HP 300Ft Model',
    '10 HP 500Ft Model',
    '10 HP 800Ft Model',
    '10 HP 1000Ft Model',
  ];
  accessoriesList: any = [
    { modelName: 'pVPanel', sno: 1, name: 'PV Panel' },
    { modelName: 'vFDPanelBox', sno: 2, name: 'VFD Panel Box' },
    { modelName: 'mountingStructure', sno: 3, name: 'Mounting Structure' },
    { modelName: 'dCCables', sno: 4, name: 'DC Cables (+) (-)' },
    { modelName: 'earthKit', sno: 5, name: 'Earth Kit' },
    { modelName: 'othersAccessories', sno: 6, name: 'Others Accessories' },
    { modelName: 'installation', sno: 7, name: 'Installation' },
    { modelName: 'transportation', sno: 8, name: 'Transportation' },
    { modelName: 'motorPump', sno: 9, name: 'Motor & Pump' },
    { modelName: 'lightingArrestor', sno: 10, name: 'Lighting Arrestor' },
    { modelName: 'hDPHose25', sno: 11, name: '2.5" HDP Hose' },
    { modelName: 'cable3CX25Sqmm', sno: 12, name: '3 C * 2.5 Sq mm Cable' },
    { modelName: 'rope16mm', sno: 13, name: '16 mm Rope' },
    { modelName: 'borewellAccessories', sno: 14, name: 'Borewell Accessories' },

  ];
  waterIrrigations: any = ['Direct Irrigation', 'Sprinkler Irrigation', 'PipeLine Irrigation', 'Trip Irrigation'];
  deliverySizes: any = ['1 inch', '1.25 inch', '1.5 inch', '2 inch', '2.5 inch', '3 inch'];
  deliverySize: any = '';
  meterBox: boolean = false;
  chooseBox: boolean = false;
  cateTypeValue: any;
  catValue: any;
  needMotor: any;
  otherAccessories: any;
  downloadPdf: any[] = []
  rows: any[] = [];
  bSize: boolean = true;
  tDepth: boolean = true;
  wLevel: boolean = true;
  pumbLowring: boolean = true;
  accesorieValue: any;
  phoneErrorMessage: boolean = false;
  phoneErrorValidMessage: boolean = false;
  priceForm: FormGroup;
  overAllErrorMessage: boolean = false;
  customerPincode: any;
  address: any;
  pincodeErrorMessage: boolean = false;
  pincodeErrorValidMessage: boolean = false;
  submitted = false;



  constructor(
    private fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private priceService: PriceService
  ) {
    this.priceForm = this.fb.group({
      first_name: ['', [Validators.required]],
      email: [''],
      phone: ['', [Validators.required]],
      pincode: ['', [Validators.required]],
      category: [''],
      categoryType: [''],
      address: [''],
      acre: [''],
      crap: [''],
      waterIrrigation: [''],
      deliverySize: [''],
      deliveryPerHr: [''],
      accessories: [''],
      boreSize: [''],
      totalDepth: [''],
      waterLevel: [''],
      pumpLowringDepth: [''], 
      pVPanel: [''],
      vFDPanelBox: [''],
      mountingStructure: [''],
      dCCables: [''],
      earthKit: [''],
      othersAccessories: [''],
      installation: [''],
      transportation: [''],
      motorPump: [''],
      lightingArrestor: [''],
      hDPHose25: [''],
      cable3CX25Sqmm: [''],
      rope16mm: [''],
      borewellAccessories: [''],
    });
  }

  ngOnInit(): void {

    this.priceService.getPrice().subscribe((res) => {
      console.log(res, 'ressks');

    })

  }
  createCusDetails() {

    if (this.priceForm.status === 'VALID') {
      console.log(this.priceForm.value, 'log');
      this.customerName = this.priceForm.value.first_name
      this.customerNo = this.priceForm.value.phone
      this.customerEmail = this.priceForm.value.email
      this.pincodeNo = this.priceForm.value.pincode
      this.category = this.priceForm.value.category
      this.address = this.priceForm.value.address
      this.categoryType = this.priceForm.value.categoryType
      this.overAllErrorMessage = false

    } else {
      this.overAllErrorMessage = true
    }

  }
  onSubmit() {
    if (!this.priceForm.valid) {
      this.overAllErrorMessage = true
      return false;
    } else {

      // this.customerName = this.priceForm.value.first_name
      // this.customerNo = this.priceForm.value.phone
      // this.customerEmail = this.priceForm.value.email
      // this.pincodeNo = this.priceForm.value.pincode
      // this.category = this.priceForm.value.category
      // this.address = this.priceForm.value.address
      // this.categoryType = this.priceForm.value.categoryType
      this.overAllErrorMessage = false

      return this.priceService.createPrice(this.priceForm.value).subscribe({
        complete: () => {
          console.log('Employee successfully created!'),
            this.ngZone.run(() => this.router.navigate(['/priceList'], {
              state: {
                data: this.priceForm.value
              }
            }));
    },
    error: (e) => {
      console.log(e);
    },
      });
}
  }
customerNoCheck(event: any) {
  let inputtxt = event?.target

  var phoneno = /^\d{10}$/;

  if (isNaN(Number(inputtxt.value))) {
    this.phoneErrorMessage = true
    return false;
  }

  if (inputtxt.value.match(phoneno)) {
    this.phoneErrorMessage = false
    this.phoneErrorValidMessage = false
    return true;
  } else {
    this.phoneErrorValidMessage = true
    return false;
  }
}
customerPincodeCheck(event: any) {
  console.log(event?.target?.value);
  var pinCodeMtc = '^[1-9][0-9]{5}$'
  if (isNaN(Number(event?.target?.value))) {
    this.pincodeErrorMessage = true
    return false;
  }

  if (event?.target?.value.match(pinCodeMtc)) {
    this.pincodeErrorMessage = false
    this.pincodeErrorValidMessage = false
    return true;
  } else {
    this.pincodeErrorValidMessage = true
    return false;
  }
}
getDetails(form: any) {

  console.log(form.value);


  this.downloadPdf = []




  //     var txt = "30 Me";
  // var numb = txt.match(/\d/g);
  // numb = numb.join("");
  // console.log(numb);
  // if (this.inchLeval == String(10)) {
  //   this.newObj.pVPanel = {
  //     sno: 1, rate: 36180, name: 'PV Panel', qty: '4 nos', specification: 'UTL or Equivalent  335 Watts / 24 V'
  //   }
  //   this.newObj.vFDPanelBox = {
  //     sno: 2, rate: 16000, name: 'VFD Panel Box', qty: '1 Nos', specification: '1HP 3 Phase 110V Mecwin Make'
  //   }
  //   this.newObj.mountingStructure = {
  //     sno: 3, rate: 12675, name: 'Mounting Structure', qty: '1 Nos', specification: 'Aluminium Zinc or Hot Dip Galvanized Coated(1.3kW)'
  //   }
  //   this.newObj.dCCables = {
  //     sno: 4, rate: 1050, name: 'DC Cables (+) (-)', qty: '30 Mtrs', specification: 'Reputed Make DC - Wire 4 sqmm / Single Core Cable'
  //   }
  //   this.newObj.earthKit = {
  //     sno: 5, rate: 2960, name: 'Earth Kit', qty: '2 set', specification: 'Earthing Cable - Copper 6 sq mm 20 mtr Earth Rode - Copper with Chemical Bag 2 nos'
  //   }
  //   this.newObj.othersAccessories = {
  //     sno: 6, rate: 3500, name: 'Others Accessories', qty: '1 set', specification: 'Reputed Make'
  //   }
  //   this.newObj.installation = {
  //     sno: 7, rate: 6000, name: 'Installation', qty: '1 set', specification: 'KTA'
  //   }
  //   this.newObj.transportation = {
  //     sno: 8, rate: 3400, name: 'Transportation', qty: '1 set', specification: 'KTA'
  //   }
  //   if (this.needMotor) {
  //     this.newObj.motorPump = { sno: 9, rate: 20000, name: 'Motor & Pump', qty: '1 Nos', specification: '1 HP 3 Phase 80 Vac Mecwin Pump Working upto 10 Mtrs' }
  //   }
  //   if (this.lightingArrestor) {
  //     this.newObj.lightingArrestor = {
  //       sno: 10, rate: 6975, name: 'Lighting Arrestor', qty: '1 SET', specification: 'SS 304 Lighting Arrestor, Lighting Arrestor GI Round Post , Earthing Cable - 50 sq mm Aluminium 7 Mtr, Earth Rode - Copper with Chemical Bag'
  //     }
  //   }
  //   if (this.otherAccessories) {
  //     this.newObj.hDPHose25 = {
  //       sno: 11, rate: 2333, name: '2.5" HDP Hose', qty: '10 Mtrs', specification: 'Reputed Make'
  //     }
  //     this.newObj.cable3CX25Sqmm = {
  //       sno: 12, rate: 1050, name: '3 C * 2.5 Sq mm Cable', qty: '15 Mtrs', specification: 'Reputed Make'
  //     }
  //     this.newObj.rope16mm = {
  //       sno: 13, rate: 330, name: '16 mm Rope', qty: '15 Mtrs', specification: 'Reputed Make'
  //     }
  //     this.newObj.borewellAccessories = {
  //       sno: 14, rate: 3510, name: 'Borewell Accessories', qty: '1 Nos', specification: 'Reputed Make'
  //     }
  //   }

  // }

  // this.downloadPdf.push(this.newObj)


  // for (const key in this.downloadPdf[0]) {
  //   if (Object.prototype.hasOwnProperty.call(this.downloadPdf[0], key)) {
  //     const element = this.downloadPdf[0][key];
  //     console.log(element, 'element');

  //     this.rows.push(element)
  //   }
  // }




  this.router.navigate(['/priceList'], {
    state: {
      data: 'yourDataToShareWithCompB'
    }
  });

}
populatetype(event: any) {
  this.catValue = event?.target?.value;
  this.categoryTypeFilter = this.categoryTypes.filter(i => i.cateId == this.catValue);
  if (this.categoryTypeFilter.length > 0) {
    this.chooseBox = this.categoryTypeFilter[0].cateId === 1
  }
}
populateCategorytype(event: any) {
  console.log(this.priceForm.value.categoryType, 'this.priceForm.value.category');
  this.categoryType = this.priceForm.value.categoryType
}
deliveryPerHrsFilter: any[] = []
findDeliverDPH(event: any) {
  let deliveryDPHValue = event?.target?.value;
  console.log(deliveryDPHValue, 'deliveryDPHValue');
  this.deliveryPerHrsFilter = this.deliveryPerHrs.filter((res: any) => res.inch === deliveryDPHValue)
  console.log(this.deliveryPerHrsFilter, 'this.deliveryPerHrsFilter');

}

changeAccesories(event: any) {
  this.accesorieValue = event?.target?.value;

}
populateChoosetype(event: any) {
  let chooseValue = event?.target?.value;
  if (chooseValue === String(5)) {
    this.meterBox = true
  } else {
    this.meterBox = false
  }
}





}
