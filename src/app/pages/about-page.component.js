import {FComponent} from "../../framework/index";

class AboutPageComponent extends FComponent {
    constructor(config) {
        super(config)
    }

    events() {
        return {
            'click .collapsible': 'onAboutClick'
        }
    }

    onAboutClick({target}){

        if (!target.classList.contains('collapsible-header')) return
        this.el.querySelectorAll('.jst').forEach(e => e.classList.remove('active'))

        target.parentNode.classList.add('active')

    }
}

export const aboutPageComponent = new AboutPageComponent({
    selector: 'app-auth-page',
    template: `<h1> О сервисе </h1>
    <div class="row">
     <div class="col s6 offset-s3">
        <ul class="collapsible popout collapsible-accordion">
          <li class="jst">
            <div class="collapsible-header" tabindex="0"><i class="material-icons">filter_drama</i>First</div>
            <div class="collapsible-body"><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></div>
          </li>
          <li class="jst">
            <div class="collapsible-header" tabindex="0"><i class="material-icons">place</i>Second</div>
            <div class="collapsible-body" ><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></div>
          </li>
          <li class="jst">
            <div class="collapsible-header" tabindex="0"><i class="material-icons">whatshot</i>Third</div>
            <div class="collapsible-body" ><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></div>
          </li>
        </ul>
       </div>
    </div>
`
})