import { Rect } from '../interfaces';

export class View {
    public id: string;
    public areaIndex: number;
    public bucketIndexes: Array<number>;
    private width: number;
    private height: number;
    private viewRect: Rect;

    constructor(id, width, height, x=0, y=0) {
        this.id = id;
        this.width = width;
        this.height = height;
        this.viewRect = {} as Rect;
        this.viewRect.width = Math.ceil(this.width + (this.width / 2));
        this.viewRect.height = Math.ceil(this.height) + (this.height / 2);
        this.updateViewRect(x, y);
    }

    updateViewRect(x, y) {
        this.viewRect.x = Math.floor(x - (this.width / 2));
        this.viewRect.y = Math.floor(y - (this.height / 2));
        return this.viewRect;
    }

    getViewRect() {
        return this.viewRect;
    }
}