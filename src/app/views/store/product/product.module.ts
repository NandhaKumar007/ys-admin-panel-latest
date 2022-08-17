import { NgModule } from '@angular/core';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { DateRangePickerModule } from '@syncfusion/ej2-angular-calendars';
import { SharedModule } from '../../../shared/shared.module';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';

@NgModule({
  declarations: [ProductComponent],
  imports: [
    SharedModule,
    ProductRoutingModule,
    DateRangePickerModule,
    BsDatepickerModule.forRoot()
  ]
})

export class ProductModule { }