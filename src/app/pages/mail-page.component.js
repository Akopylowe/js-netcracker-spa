import {FComponent} from "../../framework/index";

class MailPageComponent extends FComponent{
    constructor(config){
        super(config)
    }
}

export const mailPageComponent = new MailPageComponent({
    selector: 'app-index-page',
    template: `
    
 <ul class="collection">
    <li class="collection-item avatar">
      <img src="https://avatars.mds.yandex.net/get-yapic/42215/368241619-342521979/islands-200" alt="" class="circle">
      <span class="title">Title</span>
      <p>First Line <br>
         Second Line
      </p>
      <a href="#!" class="secondary-content"><i class="material-icons">send</i></a>
    </li>
    <li class="collection-item avatar">
      <i class="material-icons circle">folder</i>
      <span class="title">Title</span>
      <p>First Line <br>
         Second Line
      </p>
      <a href="#!" class="secondary-content"><i class="material-icons">send</i></a>
    </li>
    <li class="collection-item avatar">
      <i class="material-icons circle green">insert_chart</i>
      <span class="title">Title</span>
      <p>First Line <br>
         Second Line
      </p>
      <a href="#!" class="secondary-content"><i class="material-icons">send</i></a>
    </li>
    <li class="collection-item avatar">
      <i class="material-icons circle red">play_arrow</i>
      <span class="title">Title</span>
      <p>First Line <br>
         Second Line
      </p>
      <a href="#!" class="secondary-content"><i class="material-icons">send</i></a>
    </li>
  </ul>
    
    
    `

})