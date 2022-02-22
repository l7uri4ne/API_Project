import '../css/app.scss';
import Characters from './characters';


class App {
    constructor() {
        this.initApp();
    }

    initApp() {
        // Start application
        new Characters();
    }
}

new App();