import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class NotificationService {

  constructor(private toastr: ToastrService) { }
  clear(toastId?: number): void {
    this.toastr.clear();
  }
  success(message?: string, title?: string) {
    this.toastr.success(message, title, {
      enableHtml: true,
      progressBar: true,
    });
  }
  error(message?: string, title?: string) {
    this.toastr.error(message, title, {
      closeButton: true,
      disableTimeOut: true,
      enableHtml: true,
    });
  }

  info(message?: string, title?: string) {
    this.toastr.info(message, title, {
      closeButton: true,
      enableHtml: true,
      progressBar: true,
    });
  }

  warning(message?: string, title?: string) {
    this.toastr.warning(message, title, {
      closeButton: true,
      enableHtml: true,
      progressBar: true,
    });
  }

}
