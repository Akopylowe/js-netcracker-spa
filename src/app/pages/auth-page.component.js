import {FComponent} from "../../framework/index";

class AuthPageComponent extends FComponent{
    constructor(config){
        super(config)
    }
}

export const authPageComponent = new AuthPageComponent({
    selector: 'app-auth-page',
    template: '<h1> Авторизация </h1>'
})