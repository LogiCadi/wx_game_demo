import {DataStore} from "./base/DataStore.js";
import {UpPencil} from "./runtime/UpPencil.js";
import {DownPencil} from "./runtime/DownPencil.js";

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
        // 全局移动速度
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
        if (!this.isGameOver) {
            // 精灵绘制
            this.dataStore.get('background').draw();

            const pencils = this.dataStore.get('pencils')
            if (pencils[0].x + pencils[0].width <= 0) {
                // 第一组移出边界 移除第一组
                pencils.shift()
                pencils.shift()
            }

            if (pencils[0].x <= (window.innerWidth - pencils[0].width) / 2 && pencils.length == 2) {
                // 第一组移动到中间 增加第二组
                this.createPencil()
            }

            pencils.forEach(item => {
                item.draw()
            });

            this.dataStore.get('land').draw();

            this.dataStore.get('birds').draw()

            // 重复渲染动画效果
            let timer = requestAnimationFrame(() => this.run());
            this.dataStore.put('timer', timer);
        } else {
            // 终止动画
            cancelAnimationFrame(this.dataStore.get('timer'))
            // 销毁对象
            this.dataStore.destroy()
        }

    }
}