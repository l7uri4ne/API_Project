import characterTemplate from "../hbs/character.hbs";

export default class Character{

    constructor() {
        this.initEls();
        this.initEvents();
    }


    initEls(){

        this.els = {
            character: document.querySelector('.js-character'),
        }

    }

    initEvents(){

        this.getCharacter();
        console.log("initEvent")

    }

    getCharacter(url){
        const queryString = window.location.search;
        console.log(queryString);

        const urlParams = new URLSearchParams(queryString);

        const id = urlParams.get('id')
        console.log(id);
        fetch(`https://rickandmortyapi.com/api/character/${id}`, {
            "endpoint": url,
        })
            .then(response => {
                return response.json();

            }).then((json) => {
            console.log(json);
            this.renderCharacter(json);
        })
            .catch(err => {
                console.error(err);
            });


    }


    renderCharacter(charact){
        console.log(charact);
        const charactTemplate = characterTemplate({
            data: charact,
        });
        let characterContainer = document.getElementsByClassName("characterContainer")[0];
        characterContainer.innerHTML = charactTemplate;

    }




}