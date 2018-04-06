import {indexPageComponent} from "./pages/index-page.component";
import {authPageComponent} from "./pages/auth-page.component";
import {notFound} from "./common/not-found.component";
import {mailPageComponent} from "./pages/mail-page.component";
import {mailViewComponent} from "./pages/mail-view.component";
import {aboutPageComponent} from  "./pages/about-page.component";

export const appRoutes = [
    { path: '', component: indexPageComponent },
    { path: 'join', component: authPageComponent },
    { path: 'mail', component: mailPageComponent },
    { path: 'view', component: mailViewComponent },
    { path: 'about', component: aboutPageComponent },
    { path: '**', component: notFound },
]