import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../../shared/services/notification.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  constructor(private _notifService: NotificationService) { }

  ngOnInit() {
  }
  successClick() {
    this._notifService.success('Success Message');
  }
  errorClick() {
    this._notifService.error('error Message');
  }
  warClick() {
    this._notifService.warning('warning Message');
  }
  infoClick() {
    this._notifService.info('info Message');
  }
  alertClick() {
    alert('alert message');
  }
}
