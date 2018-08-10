import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { EditDetailsComponent } from './edit-details/edit-details.component';
import { AddDetailsComponent } from './add-details/add-details.component';
import { SearchComponent } from './home/search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { SharedModule } from '../../shared/shared.module';
import { HomeService } from './home/home.service';
import { MsgCodesRoutingModule } from './msgcodes-routing.module';



@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    MsgCodesRoutingModule,
    ReactiveFormsModule,
    Ng2SmartTableModule,
    SharedModule,
  ],
  declarations: [HomeComponent, EditDetailsComponent, AddDetailsComponent, SearchComponent],
  providers: [HomeService]
})
export class MsgcodesModule { }
