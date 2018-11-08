import {ResourceLoader} from "./js/base/ResourceLoader.js";
import {Director} from "./js/Director.js";
import {BackGround} from "./js/runtime/BackGround.js";
import {DataStore} from "./js/base/DataStore.js";

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

        // Director.getInstance()

        // let image = new Image()
        // image.src = './res/background.png'
        // image.onload = () => {
        //     this.ctx.drawImage(image, 0, 0, image.width, image.height, 0, 0, 375, 667)
        // }

    }
    /**资源第一次加载完成 */
    onFirstLoaded(map) {
        // console.log(map)
        // let backGround = new BackGround(this.ctx, map.get('background'))

        // backGround.draw()

        this.dataStore.ctx = this.ctx
        // 资源map
        this.dataStore.res = map
        this.init()
    }

    init() {
        this.dataStore.put('background', BackGround)
        Director.getInstance().run()
    }
}