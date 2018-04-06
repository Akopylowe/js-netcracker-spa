import {FComponent} from "../../framework/index";

class MailViewComponent extends FComponent{
    constructor(config){
        super(config)
    }
}

export const mailViewComponent = new MailViewComponent({
    selector: 'app-view-page',
    template: `
     <div class="title">Просмотр письма</div>
 <ul class="collection">
    <li class="collection-item avatar">
      <img src="https://avatars.mds.yandex.net/get-yapic/42215/368241619-342521979/islands-200" alt="" class="circle">
      <span class="title">Title</span>
      <p>First Line <br>
         Second Line
      </p>
      <a href="#!" class="secondary-content"><i class="material-icons">send</i></a>
    </li>
  </ul>
    
   <div class="white"> Some text </div>
    
    `

})