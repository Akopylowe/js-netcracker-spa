import {FComponent} from "../framework/index";

class AppComponent extends  FComponent {
    constructor(config){
        super(config)
    }


}

export const appComponent = new AppComponent({
    selector: 'app-root',
    template: `
    <div>
    <h4>App component works!</h4>
    <h6>its works!</h6>
    
    </div>`
})