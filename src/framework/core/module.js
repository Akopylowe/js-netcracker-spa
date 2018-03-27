   export class Module {
        constructor(config){
        this.components = config.components
        this.bootsrapComponent = config.bootstrap
        }

        start() {
            this.initComponents()
        }

        initComponents(){
            this.bootsrapComponent.render()
            this.components.forEach(c => c.render())
        }

    }