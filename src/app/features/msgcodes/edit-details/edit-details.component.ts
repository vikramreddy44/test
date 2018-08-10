import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Messages } from '../../../shared/constants/messages';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from '../../../shared/services/notification.service';
import { HomeService } from '../home/home.service';

@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrls: ['./edit-details.component.css']
})
export class EditDetailsComponent implements OnInit {

  editForm: FormGroup;
  data;
  constructor(private route: ActivatedRoute, private _notifService: NotificationService, private fb: FormBuilder,
    private _homeServices: HomeService , private router: Router) {
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
    //  console.log(resp);
    this._notifService.success(Messages.update);
    setTimeout((router: Router) => {
      this.router.navigateByUrl('/msgcodes/home');
    }, 5000);
    });
  }
  onDelete() {
    // tslint:disable-next-line:prefer-const
    this.route.params.subscribe(params => {
      this._homeServices.deleteDetails(+params['pId'], +params['Id']).subscribe(resp => {
        //   console.log(resp);
        this._notifService.success(Messages.delete);
        this.router.navigateByUrl('/msgcodes/home');
      });
    });
  }
  initalizeForm() {
    this.editForm = this.fb.group({
      project_id: [null, Validators.compose([Validators.required])],
      msg_code: [null],
      msg_text: [null],
      msg_action: [null],
      msg_type: [null],
      msg_cat: [null],
      db_record_ts: [null],
    });
  }
  bindForm() {
    this.editForm = this.fb.group({
      id: [this.data.id],
      project_id: [this.data.project_id],
      msg_code: [this.data.msg_code],
      msg_text: [this.data.msg_text],
      msg_action: [this.data.msg_action],
      msg_type: [this.data.msg_type],
      msg_cat: [this.data.msg_cat],
      db_record_ts: [this.data.db_record_ts],

    });
  }
}
