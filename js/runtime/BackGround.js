import {Sprite} from "../base/Sprite.js";

export class BackGround extends Sprite {
    constructor() {
        const image = Sprite.getImage('background')
        // super()之前不能使用this关键字，是因为子类实例的创建在父类实例构造之后
        super(image,
            0, 0, image.width, image.height,
            0, 0, window.innerWidth, window.innerHeight)
    }
}