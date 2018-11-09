import {DataStore} from "./base/DataStore.js";
/**负责游戏的运行 */
export class Director {
    static getInstance() {
        if (!Director.instance) {
            Director.instance = new Director()
        }
        return Director.instance
    }

    constructor(){
        this.dataStore = DataStore.getInstance()
    }

    run(){
        this.dataStore.get('background').draw()
        this.dataStore.get('land').draw()
    }
}