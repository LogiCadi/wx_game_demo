import { Sprite } from "../base/Sprite.js";

export class Land extends Sprite {
    constructor() {
        const image = Sprite.getImage('land')
        super(image,
            0, 0, image.width, image.height,
            0, window.innerHeight - image.height, image.width, image.height)
        this.landX = 0
        this.landSpeed = 2
    }
    draw() {
        this.landX += this.landSpeed
        super.draw(this.image,
            0, 0, this.image.width, this.image.height,
            -this.landX)
    }

}