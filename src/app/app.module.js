import {FModule} from "../framework/index";
import {appComponent} from "./app.component";

class AppModule extends FModule {
 constructor(config){
     super(config)
 }
}

export const appModule = new AppModule({
    components: [
        appComponent
    ]
}  )