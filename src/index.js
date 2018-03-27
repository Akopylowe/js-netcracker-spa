import {starton} from "./framework/core/starton"
import {appModule} from "./app/app.module"
import  {utilfw} from "./framework/index"


utilfw.delay(2000).then(() => {
starton(appModule)

})
