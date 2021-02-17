
class Storage {

    state = [];

    constructor(){

    }

    async set(film){
        console.log("estamos aqui mismo",film);
        return this.state.push(film);
    }

    async get(){
        return this.state;
    }

}

module.exports = Storage;