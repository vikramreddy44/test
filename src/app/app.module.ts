import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import external npm mmodule
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { NgProgressModule, NgProgressInterceptor } from 'ngx-progressbar';
import { MyDatePickerModule } from 'mydatepicker';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { HttpService } from './core/services/http.service';
import { LayoutsModule } from './layouts/layouts.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';



@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgProgressModule,
    LayoutsModule,
    SharedModule,
    CoreModule,
    ToastrModule.forRoot(),
    MyDatePickerModule
  ],
  providers: [HttpService, ToastrService,
    { provide: HTTP_INTERCEPTORS, useClass: NgProgressInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
  exports: [MyDatePickerModule]

})
export class AppModule { }
