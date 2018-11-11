import {ResourceLoader} from "./js/base/ResourceLoader.js";
import {Director} from "./js/Director.js";
import {DataStore} from "./js/base/DataStore.js";
import {BackGround} from "./js/runtime/BackGround.js";
import {Land} from "./js/runtime/Land.js";
import {Birds} from "./js/player/Birds.js";

/**作为游戏开始的入口 */
export class Main {
    constructor() {
        this.canvas = document.getElementById('game-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.dataStore = DataStore.getInstance();
        this.director = Director.getInstance()
        const loader = ResourceLoader.create();
        // 图片加载完成
        loader.onLoaded(map => {
            this.onFirstLoaded(map);
        });

    }

    /**资源第一次加载完成 */
    onFirstLoaded(map) {
        this.dataStore.ctx = this.ctx;
        // 资源map
        this.dataStore.res = map;
        this.init();
    }

    init() {
        this.director.isGameOver = false

        this.dataStore
            .put('background', BackGround)
            .put('land', Land)
            .put('pencils', [])
            .put('birds', Birds)
        // 点击屏幕
        this.tapEvent()
        this.director.createPencil()

        this.director.run();
    }
    /**点击屏幕 */
    tapEvent() {
        this.canvas.addEventListener('touchstart', e => {
            e.preventDefault()
            if (this.director.isGameOver) {
                // 游戏结束，点击重新开始
                console.log('游戏开始')
                this.init()
            } else {
                // 点击让小鸟飞起来
                this.birdUp()
            }
        })
    }
    /**小鸟上移 */
    birdUp() {
        const bird = this.dataStore.get('birds')

        bird.downY = bird.y - window.innerHeight / 9
        bird.isUp = true
        bird.time = 0
    }
}