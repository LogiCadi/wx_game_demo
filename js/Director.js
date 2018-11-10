import { DataStore } from "./base/DataStore.js";
import { UpPencil } from "./runtime/UpPencil.js";
import { DownPencil } from "./runtime/DownPencil.js";

/**负责游戏的运行 */
export class Director {
    static getInstance() {
        if (!Director.instance) {
            Director.instance = new Director();
        }
        return Director.instance;
    }

    constructor() {
        this.dataStore = DataStore.getInstance();
        this.speed = 2;
    }

    createPencil() {
        let minTop = window.innerHeight / 8
        let maxTop = window.innerHeight / 2
        let top = minTop + Math.random() * (maxTop - minTop)
        this.dataStore.get('pencils').push(new UpPencil(top))
        this.dataStore.get('pencils').push(new DownPencil(top))
    }

    run() {
        this.dataStore.get('background').draw();
        this.dataStore.get('land').draw();
     
        this.dataStore.get('pencils')[0].draw();
        this.dataStore.get('pencils')[1].draw();
        
        let timer = requestAnimationFrame(() => this.run());
        this.dataStore.put('timer', timer);
        // cancelAnimationFrame(this.dataStore.get('timer'))
    }
}