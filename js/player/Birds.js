import {Sprite} from "../base/Sprite.js";

export class Birds extends Sprite {
    constructor() {
        const image = Birds.getImage('birds')
        super(image)

        // 鸟的大小34*24
        // 图片截取坐标 y轴不变
        this.birdsX = [9,
            9 + 34 + 18,
            9 + 34 + 18 + 34 + 18]
        this.birdsY = 10

        this.y = window.innerHeight / 2
        this.downY = window.innerHeight / 2
        this.isUp = false

        // 绘制第几只鸟
        this.index = 0
        // 缓速 记录小数
        this.count = 0
        this.time = 0
    }

    draw() {
        // 控制小鸟飞行状态切换
        // 60Hz 
        this.count += 0.1
        this.index = Math.floor(this.count)
        if (this.index > 2) {
            this.index = this.count = 0
        }

        if (this.isUp) {
            // 向上飞
            this.y -= 5
           
            if (this.downY >= this.y) {
                this.isUp = false
            }
        } else {
            // 自由落体
            const g = 0.98 / 3
            let offsetY = (g * this.time * this.time) / 2
            this.time++
            this.y = this.downY + offsetY
        }

        super.draw(this.image,
            this.birdsX[this.index], this.birdsY, 34, 24,
            window.innerWidth / 5, this.y, 34, 24)

    }
}