import { ResourceLoader } from "./js/base/ResourceLoader.js";
import { Director } from "./js/Director.js";
import { DataStore } from "./js/base/DataStore.js";
import { BackGround } from "./js/runtime/BackGround.js";
import { Land } from "./js/runtime/Land.js";

/**作为游戏开始的入口 */
export class Main {
    constructor() {
        this.canvas = document.getElementById('game-canvas')
        this.ctx = this.canvas.getContext('2d')
        this.dataStore = DataStore.getInstance()
        const loader = ResourceLoader.create()
        // 图片加载完成
        loader.onLoaded(map => {
            this.onFirstLoaded(map)
        })

    }
    /**资源第一次加载完成 */
    onFirstLoaded(map) {
        this.dataStore.ctx = this.ctx
        // 资源map
        this.dataStore.res = map
        this.init()
    }

    init() {
        this.dataStore
            .put('background', BackGround)
            .put('land', Land)
        Director.getInstance().run()
    }
}