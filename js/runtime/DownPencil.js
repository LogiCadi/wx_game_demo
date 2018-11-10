import { Pencil } from './Pencil.js';

export class DownPencil extends Pencil {
    constructor(top) {
        const image = Pencil.getImage('pencilUp');
        super(image, top);
    }
    draw() {
        let gap = window.innerHeight / 5
        this.y = this.top + gap
        super.draw()
    }
}