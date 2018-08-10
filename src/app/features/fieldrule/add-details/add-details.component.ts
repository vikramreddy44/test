import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../../shared/services/notification.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Messages } from '../../../shared/constants/messages';
import { Router } from '@angular/router';
import { HomeService } from '../home/home.service';

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
  //    console.log(resp);
    });
     this._notifService.success(Messages.success);
     this.router.navigateByUrl('/fieldrule/home');
      }

  initalizeForm() {
    this.addForm = this.fb.group({
      id: [0],
      project_id: [null, Validators.required],
      error_number: [null, Validators.required],
      field_name: [null, Validators.required],
      auto_create_flag: [null, Validators.required],
      field_rule_seq: [null, Validators.required],
      min_value: '',
      max_value: '',
      required_flag: [null, Validators.required],
      level1_days: [null, Validators.required],
      level1_max_attempts: [null, Validators.required],
      level2_days: [null, Validators.required],
      level2_max_attempts: [null, Validators.required],
      level3_days: [null, Validators.required],
      level3_max_attempts: [null, Validators.required],
      range_min: '',
      range_max: '',
      range_type: '',
      range_source_field: '',
      range_source_event: '',
      action_name: '',
      email_address: [null, Validators.required],
      email_subject: '',
      email_link: '',
      conditional_field: '',
      conditional_value: '',
      conditional_form: '',
      override_field: '',
      override_value: '',
      override_form: '',
      override_reason: '',
      field_label: '',
      field_location: '',
      field_seq: '',
      field_query_msg: '',
      field_rule_delay: '',
      db_record_ts: '',
      field_rule_msg: '',
      custom_rule_sql: '',
      email_body: '',
      format_string: '',
      query_order: '',
      excl_ind: '',
      optional_value: '',
      field_type: '',
      active_flag: '',
      cdrc_form_name: '',
      cdrc_field_name: '',
      fields_affected: '',

    });
  }
}
