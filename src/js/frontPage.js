
export default class FrontPage{

    constructor() {
        this.initEls();
        this.initEvents();
    }


    initEls(){

        this.els = {
            data: document.querySelector('.js-frontPage'),

        }


    }

    initEvents(){

        this.getData();

    }

    getData(url){

        fetch(`https://rickandmortyapi.com/api/character/`, {
            "endpoint": url,
        })
            .then(response => {
                return response.json();

            }).then((json) => {
            console.log(json);
            this.renderData(json);
        })
            .catch(err => {
                console.error(err);
            });

    }


    renderData(charact){
        console.log(charact);

        let randomId = Math.floor(Math.random() * 826)+1;

        let first = document.querySelector('#first');
        first.innerHTML = "<a href=\"http://localhost:8080/character.html?id="+randomId+"\"><img src=\"https://rickandmortyapi.com/api/character/avatar/"+randomId+".jpeg\" alt=\"\"></a>";

        randomId = Math.floor(Math.random() * 827);

        let second = document.querySelector('#second');
        second.innerHTML = "<a href=\"http://localhost:8080/character.html?id="+randomId+"\"><img src=\"https://rickandmortyapi.com/api/character/avatar/"+randomId+".jpeg\" alt=\"\"></a>";

        randomId = Math.floor(Math.random() * 827);

        let third = document.querySelector('#third');
        third.innerHTML = "<a href=\"http://localhost:8080/character.html?id="+randomId+"\"><img src=\"https://rickandmortyapi.com/api/character/avatar/"+randomId+".jpeg\" alt=\"\"></a>";
    }

}