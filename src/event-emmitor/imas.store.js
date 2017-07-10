import singleton from 'singleton';

class ImasStore extends singleton {

    constructor() {
        super();
    }

    setData = (imas) => {
        this.imas = imas;
        if(!this.imas.hop) this.imas.hop = 1
        else this.imas.hop++
    }

    getMetaData = () => {
        return this.imas;
    }
}

export default ImasStore.get();