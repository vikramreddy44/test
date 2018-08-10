import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AuthGuard } from './auth.guard';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';



const routes: Routes = [
    {
        path: '',
        redirectTo: 'auth',
        pathMatch: 'full'
    },
    {
        path: 'fieldrule',
        component: MainLayoutComponent,
        loadChildren: './features/fieldrule/fieldrule.module#FieldRuleModule'
    },
    {
        path: 'dashboard',
        component: MainLayoutComponent,
        loadChildren: './features/dashboard/dashboard.module#DashboardModule'
    },
    {
        path: 'msgcodes',
        component: MainLayoutComponent,
        loadChildren: './features/msgcodes/msgcodes.module#MsgcodesModule'
    },
    {
        path: 'fieldxml',
        component: MainLayoutComponent,
        loadChildren: './features/fieldxml/fieldxml.module#FieldxmlModule'
    },
    {
        path: 'auth',
        // component: LoginLayoutComponent,
        loadChildren: './features/auth/auth.module#AuthModule',
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}
