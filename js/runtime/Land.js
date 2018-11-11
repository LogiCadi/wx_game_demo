import {Sprite} from "../base/Sprite.js";
import {Director} from "../Director.js";

export class Land extends Sprite {
    constructor() {
        const image = Land.getImage('land')
        super(image,
            0, 0, image.width, image.height,
            0, window.innerHeight - image.height, window.innerWidth + 100, image.height)
    }

    draw() {
        this.x -= Director.getInstance().speed
        // 地板移动 循环
        if (-this.x > (this.width - window.innerWidth)) {
            this.x = 0
        }
        super.draw()
    }

}