import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HomeService } from '../home.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() submit: EventEmitter<any> = new EventEmitter();
  searchForm: FormGroup;
  searchData;
  constructor(private _homeService: HomeService, private fb: FormBuilder) {
    this.initializeForm();
  }

  ngOnInit() {
  }
  fetchReportData(msgsearchData) {
    this._homeService.getSearchData(msgsearchData).subscribe(resp => {
   //   console.log(resp);
      this.submit.emit(resp);
    });
  }
  private initializeForm() {
    this.searchForm = this.fb.group({

      projectId: [],
      msgCode: [],
      msgText: [],
      msgAction: [],
      msgType: [],
      msgCat: [],
      dbRecord: [],
      // subject: [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(200)])],
      // description: [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(500)])],
    });
  }
}
