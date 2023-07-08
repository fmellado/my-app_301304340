import {Routes} from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectComponent } from './project/project.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { BussinesComponent} from './bussines/bussines.component';

const appRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: 'about',
        component: AboutComponent,
    },
    {
        path:'project',
        component:ProjectComponent,
    },
    {
        path:'contact',
        component:ContactComponent,
    },
    {
        path:'services',
        component:ServicesComponent,
    },
    {
        path:'bussines',
        component:BussinesComponent,
    },
];

export default appRoutes;