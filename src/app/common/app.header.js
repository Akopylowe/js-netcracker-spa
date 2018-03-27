import {FComponent} from "../../framework/index";

class AppHeader extends FComponent {
    constructor(config){
        super(config)
    }
}

export const appHeader = new AppHeader({
    selector: 'app-header',
    template: `
  <nav class="light-blue">
    <div class="nav-wrapper">
      <a href="#!" class="brand-logo center">Email  </a>
      <ul class="right hide-on-med-and-down">
     <li style="margin-right: 20px"> safty by AntiFish</li>
        <li><a href="#">О сервисе</a></li>
        <li class="active"><a href="#join">Регистрация</a></li>
      </ul>
    </div>
  </nav>
    `

})