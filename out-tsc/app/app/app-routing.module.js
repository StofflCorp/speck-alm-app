import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
const routes = [
    { path: '', redirectTo: 'home/news', pathMatch: 'full' },
    { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
    { path: 'socialMedia', loadChildren: () => import('./social-media/social-media.module').then(m => m.SocialMediaPageModule) },
    { path: 'info', loadChildren: () => import('./info/info.module').then(m => m.InfoPageModule) },
    {
        path: 'login',
        loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
    },
    {
        path: 'register',
        loadChildren: () => import('./register/register.module').then(m => m.RegisterPageModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [
            RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
        ],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map