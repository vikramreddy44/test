import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() submit: EventEmitter<any> = new EventEmitter();
  searchForm: FormGroup;
  constructor(private _homeService: HomeService, private fb: FormBuilder) {
    this.initializeForm();
  }
  ngOnInit() {
  }
  fetchReportData(searchData) {
    this._homeService.getSearchData(searchData).subscribe(resp => {
 //     console.log(resp);
      this.submit.emit(resp);
    });
  }
  private initializeForm() {
    this.searchForm = this.fb.group({
      projectId: [],
      fieldName: [],
      autoFlag: [],
      fieldRuleSeq: [],
      customXml: [],
      dbRecord: []
    });
  }
}
