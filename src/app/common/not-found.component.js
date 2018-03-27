import {FComponent} from "../../framework/index";

class NotFound extends FComponent {
    constructor(config){
        super(config)
    }
}

export const notFound = new NotFound({
    selector: 'app-404',
    template: `
    
         <h2 class="red darken-1">404 Not Found (Бомжи стащили)</h2>
         <a href = "#" > Перейти на гланую</a>> 
     </div>
    `

})