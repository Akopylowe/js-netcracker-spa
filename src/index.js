import {starton} from "./framework/core/starton"
import {appModule} from "./app/app.module"
import  {utilfw} from "./framework/index"


utilfw.delay(1000).then(() => {
starton(appModule)

})
