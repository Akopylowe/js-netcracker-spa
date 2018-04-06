import {FComponent} from "../../framework/index";
import {router} from "../../framework/tools/router"

class IndexPageComponent extends FComponent {
    constructor(config) {
        super(config)
    }

    preInit(){
        console.log('Pre init')
    }

    afterInit(){
        console.log('After init')
    }

    goTo(){
        router.navigate('mail')
    }
}

export const indexPageComponent = new IndexPageComponent({
    selector: 'app-index-page',
    template: `
    
<div class="wrapper">
    <form action="#mail">
      <div class="title">Авторизация</div>
      <div class="content">
        <ul>
          <li>
            <input class="wicon" id="mail" type="text" placeholder="E-mail"/>
          </li>
          <li>
             <input class="wicon" id="pass" type="password" placeholder="Пароль"/>
          </li>  
        </ul>
      </div>
      <div class="actions">
    <button type="submit" class="button blue">Войти</button>
  </div>
  </form>
</div>

    
    
    `

})