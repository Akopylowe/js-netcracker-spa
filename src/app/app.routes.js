import {indexPageComponent} from "./pages/index-page.component";
import {authPageComponent} from "./pages/auth-page.component";

export const appRoutes = [
    { path: '', component: indexPageComponent },
    { path: 'join', component: authPageComponent },
]