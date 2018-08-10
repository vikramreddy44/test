import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { EditDetailsComponent } from '../edit-details/edit-details.component';
import { Router } from '@angular/router';
import { NotificationService } from '../../../shared/services/notification.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data;
  constructor(private _homeService: HomeService, private router: Router,
    private _notifications: NotificationService
  ) { }

  ngOnInit() {

  }
  onSubmitClicked(searchData: any): void {
    this.data = searchData;
  //  console.log(searchData);
  }

  rowSelected(ev, type) {
    if (type === 'edit') {
      this.router.navigate(['/fieldrule/edit', ev.data.project_id, ev.data.id]);
    } else {
      this.router.navigate(['/fieldrule/add']);
    }
  }

  // tslint:disable-next-line:member-ordering
  settings = {
    columns: {
      project_id: {
        title: ' Project ID',
        filter: false

      },
      field_name: {
        title: 'Field Name',
        filter: false
      },
      auto_create_flag: {
        title: 'Auto Flag',
        filter: false
      },
      field_rule_seq: {
        title: 'Field Rule Seq',
        filter: false
      },
      error_number: {
        title: 'Error Number',
        filter: false
      },
      //   min_value: {
      //   title: 'Min Value',
      //   filter: false
      // },
      // max_value: {
      //   title: 'Max Value',
      //   filter: false
      // },
       required_flag: {
         title: 'Required Flag',
         filter: false
       },
      // level1_days: {
      //   title: 'Level1 Days',
      //   filter: false
      // },
      // level1_max_attempts: {
      //   title: 'Level1 Attempts',
      //   filter: false
      // },
      // level2_days: {
      //   title: 'Level2 Days',
      //   filter: false
      // },
      // level2_max_attempts: {
      //   title: 'Level2 Attempts',
      //   filter: false
      // },
      // level3_days: {
      //   title: 'Level3 Days',
      //   filter: false
      // },
      // level3_max_attempts: {
      //   title: 'Level3 Attempts',
      //   filter: false
      // },
      // range_min: {
      //   title: 'Range Min',
      //   filter: false
      // },
      // range_max: {
      //   title: 'Range Max',
      //   filter: false
      // },
      // range_type: {
      //   title: 'Range Type',
      //   filter: false
      // },
      // range_source_field: {
      //   title: 'Range Source Field',
      //   filter: false
      // },
      // range_source_event: {
      //   title: 'Range Source Event',
      //   filter: false
      // },
      // action_name: {
      //   title: 'Action Name',
      //   filter: false
      // },
      // email_address: {
      //   title: 'Email Address',
      //   filter: false
      // },
      // email_subject: {
      //   title: 'Email Subject',
      //   filter: false
      // },
      // email_link: {
      //   title: 'Email Link',
      //   filter: false
      // },
      // conditional_field: {
      //   title: 'Conditional Field',
      //   filter: false
      // },
      // conditional_value: {
      //   title: 'Conditional Value',
      //   filter: false
      // },
      // conditional_form: {
      //   title: 'Conditional Form',
      //   filter: false
      // },
      // override_field: {
      //   title: 'Override Field',
      //   filter: false
      // },
      // override_value: {
      //   title: 'Override Value',
      //   filter: false
      // },
      // override_form: {
      //   title: 'Override Form',
      //   filter: false
      // },
      // override_reason: {
      //   title: 'Override Reason',
      //   filter: false
      // },
      // field_label: {
      //   title: 'Field Label',
      //   filter: false
      // },
      // field_location: {
      //   title: 'Field Location',
      //   filter: false
      // },
      //  field_seq: {
      //    title: 'Field Seq',
      //    filter: false
      //  },
      // field_query_msg: {
      //   title: 'Field Query Msg',
      //   filter: false
      // },
      // field_rule_delay: {
      //   title: 'Field Rule Delay',
      //   filter: false
      // },
       db_record_ts: {
         title: 'DB Record',
         filter: false
       },
      // field_rule_msg: {
      //   title: 'Field Rule Msg',
      //   filter: false
      // },
      //  custom_rule_sql: {
      //    title: 'Custom Rule Sql',
      //    filter: false
      //  },
      // email_body: {
      //   title: 'Email Body',
      //   filter: false
      // },
      // format_string: {
      //   title: 'Format String',
      //   filter: false
      // },
      // query_order: {
      //   title: 'Query Order',
      //   filter: false
      // },
      // excl_ind: {
      //   title: 'Exclusion Ind',
      //   filter: false
      // },
      // optional_value: {
      //   title: 'Optional Value',
      //   filter: false
      // },
      // field_type: {
      //   title: 'Field Type',
      //   filter: false
      // },
      // active_flag: {
      //   title: 'Active Flag',
      //   filter: false
      // },
      // cdrc_form_name: {
      //   title: 'Cdrc Form Name',
      //   filter: false
      // },
      // cdrc_field_name: {
      //   title: 'Cdrc Field Name',
      //   filter: false
      // },
      // fields_affected: {
      //   title: 'Fields Affected',
      //   filter: false
      // }
    },
    mode: 'external',
    actions: {
      add: true,
      edit: true,
      delete: false,
    },
    add: {
      inputClass: '',
      addButtonContent: 'Add',
      createButtonContent: 'Create',
      cancelButtonContent: 'Cancel',
      confirmCreate: false,
    },
    pager: {
      display: true,
      perPage: 10
    }
  };
}
