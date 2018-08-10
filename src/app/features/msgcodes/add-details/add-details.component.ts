import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../../shared/services/notification.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Messages } from '../../../shared/constants/messages';
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
    //  console.log(resp);
    });
     this._notifService.success(Messages.success);
     this.router.navigateByUrl('/msgcodes/home');
      }

  initalizeForm() {
    this.addForm = this.fb.group({
      id: [0],
      project_id: [null, Validators.compose([Validators.required])],
      msg_code: [null],
      msg_text: [null],
      msg_action: [null],
      msg_type: [null],
      msg_cat: [null],
      db_record_ts: [null],
      s_id: '9999',
    });
  }
}
