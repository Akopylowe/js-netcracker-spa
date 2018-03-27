import {FComponent} from "../../framework/index";

class IndexPageComponent extends FComponent{
    constructor(config){
        super(config)
    }
}

export const indexPageComponent = new IndexPageComponent({
    selector: 'app-index-page',
    template: '<h1> Главная </h1>'
})