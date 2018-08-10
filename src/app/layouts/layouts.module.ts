import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutsRoutingModule } from './layouts-routing.module';
import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutsRoutingModule
  ],
  declarations: [LoginLayoutComponent, MainLayoutComponent, HeaderComponent, FooterComponent],
  exports: [MainLayoutComponent]
})
export class LayoutsModule { }
