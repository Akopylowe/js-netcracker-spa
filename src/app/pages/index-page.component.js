import {FComponent} from "../../framework/index";

class IndexPageComponent extends FComponent {
    constructor(config) {
        super(config)
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