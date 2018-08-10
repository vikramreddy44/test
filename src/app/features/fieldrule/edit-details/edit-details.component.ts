import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { NotificationService } from '../../../shared/services/notification.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Messages } from '../../../shared/constants/messages';
import { HomeService } from '../home/home.service';
import { IMyDpOptions } from '../../../../../node_modules/mydatepicker';


@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrls: ['./edit-details.component.css']
})
export class EditDetailsComponent implements OnInit {
  editForm: FormGroup;
  data;
  constructor(private route: ActivatedRoute, private _notifService: NotificationService, private fb: FormBuilder,
    private _homeServices: HomeService, private router: Router) {
    this.initalizeForm();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this._homeServices.getDataById(+params['pId'], +params['Id']).subscribe(resp => {
        this.data = resp[0];
        if (this.data) {
          this.bindForm();
              }
      });
    });

  }

  editFormSubmit(formData) {
    this._homeServices.updateDetails(formData).subscribe(resp => {
      //   console.log(resp);
      this._notifService.success(Messages.update);
      setTimeout((router: Router) => {
        this.router.navigateByUrl('/fieldrule/home');
      }, 5000);
    });
  }
  onDelete() {
    // tslint:disable-next-line:prefer-const
    this.route.params.subscribe(params => {
      this._homeServices.deleteDetails(+params['pId'], +params['Id']).subscribe(resp => {
        //   console.log(resp);
        this._notifService.success(Messages.delete);
        this.router.navigateByUrl('/fieldrule/home');
      });
    });
  }
  initalizeForm() {
    this.editForm = this.fb.group({
      project_id: [null, Validators.compose([Validators.required])],
      error_number: [null, Validators.compose([Validators.required])],
      field_name: [null],
      auto_create_flag: [null],
      field_rule_seq: [null],
      min_value: [null],
      max_value: [null],
      required_flag: [null],
      level1_days: [null],
      level1_max_attempts: [null],
      level2_days: [null],
      level2_max_attempts: [null],
      level3_days: [null],
      level3_max_attempts: [null],
      range_min: [null],
      range_max: [null],
      range_type: [null],
      range_source_field: [null],
      range_source_event: [null],
      action_name: [null],
      email_address: [null],
      email_subject: [null],
      email_link: [null],
      conditional_field: [null],
      conditional_value: [null],
      conditional_form: [null],
      override_field: [null],
      override_value: [null],
      override_form: [null],
      override_reason: [null],
      field_label: [null],
      field_location: [null],
      field_seq: [null],
      field_query_msg: [null],
      field_rule_delay: [null],
      db_record_ts: [null],
      field_rule_msg: [null],
      custom_rule_sql: [null],
      email_body: [null],
      format_string: [null],
      query_order: [null],
      excl_ind: [null],
      optional_value: [null],
      field_type: [null],
      active_flag: [null],
      cdrc_form_name: [null],
      cdrc_field_name: [null],
      fields_affected: [null],

    });
  }
  bindForm() {
    this.editForm = this.fb.group({
      id: [this.data.id],
      project_id: [this.data.project_id],
      error_number: [this.data.error_number],
      field_name: [this.data.field_name],
      auto_create_flag: [this.data.auto_create_flag],
      field_rule_seq: [this.data.field_rule_seq],
      min_value: [this.data.min_value],
      max_value: [this.data.max_value],
      required_flag: [this.data.required_flag],
      level1_days: [this.data.level1_days],
      level1_max_attempts: [this.data.level1_max_attempts],
      level2_days: [this.data.level2_days],
      level2_max_attempts: [this.data.level2_max_attempts],
      level3_days: [this.data.level3_days],
      level3_max_attempts: [this.data.level3_max_attempts],
      range_min: [this.data.range_min],
      range_max: [this.data.range_max],
      range_type: [this.data.range_type],
      range_source_field: [this.data.range_source_field],
      range_source_event: [this.data.range_source_event],
      action_name: [this.data.action_name],
      email_address: [this.data.email_address],
      email_subject: [this.data.email_subject],
      email_link: [this.data.email_link],
      conditional_field: [this.data.conditional_field],
      conditional_value: [this.data.conditional_value],
      conditional_form: [this.data.conditional_form],
      override_field: [this.data.override_field],
      override_value: [this.data.override_value],
      override_form: [this.data.override_form],
      override_reason: [this.data.override_reason],
      field_label: [this.data.field_label],
      field_location: [this.data.field_location],
      field_seq: [this.data.field_seq],
      field_query_msg: [this.data.field_query_msg],
      field_rule_delay: [this.data.field_rule_delay],
       db_record_ts: [this.data.db_record_ts],
      field_rule_msg: [this.data.field_rule_msg],
      custom_rule_sql: [this.data.custom_rule_sql],
      email_body: [this.data.email_body],
      format_string: [this.data.format_string],
      query_order: [this.data.query_order],
      excl_ind: [this.data.excl_ind],
      optional_value: [this.data.optional_value],
      field_type: [this.data.field_type],
      active_flag: [this.data.active_flag],
      cdrc_form_name: [this.data.cdrc_form_name],
      cdrc_field_name: [this.data.cdrc_field_name],
      fields_affected: [this.data.fields_affected],

    });
  }
}
