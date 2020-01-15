import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import {SaNavigationComponent} from '../sa-navigation/sa-navigation.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild([
            {
                path: '',
                component: HomePage,
                children: [
                    {
                        path: '',
                        redirectTo: 'news'
                    },
                    {
                        path: 'news',
                        loadChildren: () => import('../LandingPage/NewsPage/news/news.module').then(m => m.NewsPageModule)
                    },
                    {
                        path: 'events',
                        loadChildren: () => import('../LandingPage/EventPage/events/events.module').then(m => m.EventsPageModule)
                    }
                ]
            }
        ])
    ],
    exports: [
        SaNavigationComponent
    ],
    declarations: [HomePage, SaNavigationComponent]
})
export class HomePageModule {}
