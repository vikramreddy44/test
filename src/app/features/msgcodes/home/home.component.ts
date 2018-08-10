import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../../shared/services/notification.service';
import { Router } from '@angular/router';
import { HomeService } from './home.service';

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
   // console.log(msgsearchData);
  }

  rowSelected(ev, type) {
    if (type === 'edit') {
      this.router.navigate(['/msgcodes/edit', ev.data.project_id, ev.data.id]);
    } else {
      this.router.navigate(['/msgcodes/add']);
    }
  }

  // tslint:disable-next-line:member-ordering
  settings = {
    columns: {
      project_id: {
        title: ' Project ID',
        filter: false

      },
      msg_code: {
        title: 'Msg Code',
        filter: false
      },
      msg_text: {
        title: 'Msg Text',
        filter: false
      },
      msg_action: {
        title: 'Msg Action',
        filter: false
      },
      msg_type: {
        title: 'Msg Type',
        filter: false
      },

      msg_cat: {
        title: 'Msg Cat',
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

