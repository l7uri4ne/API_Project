import '../css/app.scss';
import Characters from './characters';
import Character from './character';
import FrontPage from "./frontPage";


class App {
    constructor() {
        this.initEls();
        this.initApp();
    }

    initEls() {

        this.els = {
            characters: document.querySelector('.js-characters'),
            character: document.querySelector('.js-character'),
            front: document.querySelector('.js-frontPage')
        }


        //new Character();
    }

    initApp(){

        // Start application
        if (this.els.characters){
            new Characters();
        }

        if (this.els.character){
            new Character();
        }

        if (this.els.front){
            new FrontPage();
        }

    }
}

new App();