import {FModule} from "../framework/index";
import {appComponent} from "./app.component";
import {appHeader} from "./common/app.header";
import {appRoutes} from "./app.routes";


class AppModule extends FModule {
 constructor(config){
     super(config)
 }
}

export const appModule = new AppModule({
    components: [
        appHeader
    ],
    bootstrap: appComponent,
    routes: appRoutes
}  )