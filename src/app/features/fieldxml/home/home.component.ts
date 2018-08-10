import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
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
 //   console.log(searchData);
  }

  rowSelected(ev, type) {
    if (type === 'edit') {
      this.router.navigate(['/fieldxml/edit', ev.data.project_id, ev.data.id]);
    } else {
      this.router.navigate(['/fieldxml/add']);
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
        title: 'Auto Create Flag',
        filter: false
      },
      field_rule_seq: {
        title: 'Field Rule Seq',
        filter: false
      },

      custom_xml: {
        title: 'Custom Xml',
        filter: false
      },

      db_record_ts: {
        title: 'DB Record',
        filter: false
      },

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

