import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditDetailsComponent } from './edit-details/edit-details.component';
import { AddDetailsComponent } from './add-details/add-details.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './home/search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { SharedModule } from '../../shared/shared.module';
import { HomeService } from './home/home.service';
import { FieldXmlRoutingModule } from './fieldxml-routing.module';


@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    FieldXmlRoutingModule,
    ReactiveFormsModule,
    Ng2SmartTableModule,
    SharedModule,
  ],
  declarations: [ EditDetailsComponent, AddDetailsComponent, HomeComponent, SearchComponent],
  providers: [HomeService]
})
export class FieldxmlModule { }
