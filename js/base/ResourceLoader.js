// canvas在图片资源加载完毕后进行渲染
import {Resources} from "./Resources.js";

export class ResourceLoader {
    constructor() {
        this.map = new Map(Resources)
        for (let [key, value] of this.map) {
            const image = new Image()
            image.src = value
            this.map.set(key, image)
        }
    }

    onLoaded(callback) {
        let count = 0
        for (const value of this.map.values()) {
            value.onload = () => {
                if(++count >= this.map.size){
                    callback && callback(this.map)
                }
            }
        }
    }

    static create(){
        return new ResourceLoader()
    }
}