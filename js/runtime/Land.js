import { Sprite } from "../base/Sprite.js";
import { Director } from "../Director.js";

export class Land extends Sprite {
    constructor() {
        const image = Sprite.getImage('land')
        super(image,
            0, 0, image.width, image.height,
            0, window.innerHeight - image.height, image.width, image.height)
    }

    draw() {
        this.x -= Director.getInstance().speed
        if (-this.x > (this.srcW - window.innerWidth)) {
            this.x = 0
        }
        super.draw()
    }

}