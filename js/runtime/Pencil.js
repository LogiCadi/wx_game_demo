import {Sprite} from '../base/Sprite.js';
import {Director} from '../Director.js';

export class Pencil extends Sprite {
    constructor(image, top) {
        super(image,
            0, 0, image.width, image.height,
            window.innerWidth, 0, image.width, image.height);
        // top：上铅笔在视图上显示的高度
        this.top = top
    }

    draw() {
        this.x -= Director.getInstance().speed;
        super.draw();
    }
}