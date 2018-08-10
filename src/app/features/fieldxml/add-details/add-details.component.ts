import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NotificationService } from '../../../shared/services/notification.service';
import { Router } from '@angular/router';
import { HomeService } from '../home/home.service';
import { Messages } from '../../../shared/constants/messages';

@Component({
  selector: 'app-add-details',
  templateUrl: './add-details.component.html',
  styleUrls: ['./add-details.component.css']
})
export class AddDetailsComponent implements OnInit {

  addForm: FormGroup;
  data;
  constructor(private router: Router, private _notifService: NotificationService, private fb: FormBuilder
    , private _homeServices: HomeService) {
    this.initalizeForm();
  }

  ngOnInit() {

  }
  addFormSubmit(formData) {
    this._homeServices.addDetails(formData).subscribe(resp => {
   //   console.log(resp);
      this._notifService.success(Messages.success);
      this.router.navigateByUrl('/fieldxml/home');
    });

  }

  initalizeForm() {
    this.addForm = this.fb.group({
      id: [0],
      project_id: [null, Validators.compose([Validators.required])],
      field_name: [null, Validators.compose([Validators.required])],
      auto_create_flag: '',
      field_rule_seq: '',
      custom_xml: '',
      db_record_ts: '',
      s_id: '9999',
    });
  }
}
