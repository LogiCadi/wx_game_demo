import { Pencil } from './Pencil.js';

export class UpPencil extends Pencil {
    constructor(top) {
        const image = UpPencil.getImage('pencilUp');
        super(image, top);
    }
    draw() {
        this.y = this.top - this.height
        super.draw()
    }
}