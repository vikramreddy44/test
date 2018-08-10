
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FieldRuleRoutingModule } from './fieldrule-routing.module';
import { HomeComponent } from './home/home.component';
import { EditDetailsComponent } from './edit-details/edit-details.component';
import { HomeService } from './home/home.service';
import { SearchComponent } from './home/search/search.component';

import { AddDetailsComponent } from './add-details/add-details.component';
import { SharedModule } from '../../shared/shared.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { DemoComponent } from './demo/demo.component';
import { MyDatePickerModule } from '../../../../node_modules/mydatepicker';


@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    FieldRuleRoutingModule,
    ReactiveFormsModule,
    Ng2SmartTableModule,
    SharedModule,
    MyDatePickerModule
  ],
  // tslint:disable-next-line:max-line-length
  declarations: [HomeComponent, EditDetailsComponent, SearchComponent, AddDetailsComponent, DemoComponent ],
  providers: [HomeService]
})
export class FieldRuleModule { }
