import $ from 'jquery';
import charactersTemplate from "../hbs/characters.hbs";

export default class Characters{
    constructor() {
        this.initEls();
        this.initEvents();
    }


    initEls() {
        //API settings
        //this.url = 'https://rickandmortyapi.com/api/character';
        this.next = 'https://rickandmortyapi.com/api/character';
        this.$els = {
            charactersImage: $('.js-charactersImage'),
        }
        this.els = {
            container: document.querySelector('.container'),
        }

    }

    initEvents() {
        this.getCharacters('https://rickandmortyapi.com/api/character');
        const next = document.querySelector('.js-nextButton');
        const previous = document.querySelector('.js-previousButton');

        const all = document.querySelector('.js-allButton');
        const alive = document.querySelector('.js-aliveButton');
        const dead = document.querySelector('.js-deadButton');

        next.addEventListener('click', () => {
            this.getNext(this.next);
        });

        previous.addEventListener('click', () => {
            this.getPrevious(this.previous);
        });

        all.addEventListener('click', () => {
            this.getCharacters(this.all);
        });

        alive.addEventListener('click', () => {
            this.getAlive(this.alive);
        });

        dead.addEventListener('click', () => {
            this.getDead(this.dead);
        });

    }

    getNext(url){
        console.log('next', url);
        const apiNext = {
            endpoint: url,
        };
        $.ajaxSetup ({cache: false});
        $.getJSON(apiNext.endpoint)
            .then((response) => {
                //console.log(response);
                this.next = response.info.next;
                //console.log(this.next);
                this.renderCharacters(response);
            })
            .catch((e) => {
                console.log('Quote error: ', e);
            })
        console.log(this.next);
    }

    getPrevious(url){
        console.log('previous', url);
        const apiPrev = {
            endpoint: url,
        };
        $.ajaxSetup ({cache: false});
        $.getJSON(apiPrev.endpoint)
            .then((response) => {
                //console.log(response);
                this.previous = response.info.prev;
                //console.log(this.next);
                this.renderCharacters(response.info.prev);
            })
            .catch((e) => {
                console.log('Quote error: ', e);
            })
        console.log(this.previous);
    }

    getAlive(url){

        fetch("https://rickandmortyapi.com/api/character/?status=alive", {
            "endpoint": url,
        })
            .then(response => {
                return response.json();

            }).then((json) => {
            console.log(json);
            this.next = json.info.next;
            this.previous = json.info.prev;
            console.log("previous"+this.previous);
            this.renderCharacters(json);
        })
            .catch(err => {
                console.error(err);
            });

    }

    getDead(url){

        fetch("https://rickandmortyapi.com/api/character/?status=dead", {
            "endpoint": url,
        })
            .then(response => {
                return response.json();

            }).then((json) => {
            console.log(json);
            this.next = json.info.next;
            this.previous = json.info.prev;
            console.log("previous"+this.previous);
            this.renderCharacters(json);
        })
            .catch(err => {
                console.error(err);
            });

    }

    getCharacters(url){
        fetch("https://rickandmortyapi.com/api/character", {
            "endpoint": url,
        })
            .then(response => {
                return response.json();

            }).then((json) => {
            console.log(json);
            this.next = json.info.next;
            this.previous = json.info.prev;
            console.log("previous"+this.previous);
            this.renderCharacters(json);
        })
            .catch(err => {
                console.error(err);
            });

    }


    renderCharacters(charact){
        console.log(charact);
        const charactTemplate = charactersTemplate({
            data: charact.results,
        });
        let charactersContainer = document.getElementsByClassName("containerTemplate")[0];
        charactersContainer.innerHTML = charactTemplate;

    }
}