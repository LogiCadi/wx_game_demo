import {Pencil} from './Pencil.js';

export class DownPencil extends Pencil {
    constructor(top) {
        const image = DownPencil.getImage('pencilDown');
        super(image, top);
    }
    draw() {
        // gap:间隙
        let gap = window.innerHeight / 5
        this.y = this.top + gap
        super.draw()
    }
}