import { Rect } from '../interfaces';
import { AreaRect } from './AreaRect';

export class Bucket {
    public index: number;
    public rect: Rect;
    private areaIndexes: Array<number>;
    private clientRects: Map<string, Rect>;
    private entityRects: Map<string, Rect>;

    constructor(index, rect) {
        this.index = index;
        this.rect = rect;
        this.areaIndexes = [];
    }

    getRect() {
        return this.rect;
    }

    addAreaIndex(index) {
        this.areaIndexes.push(index);
    }

    clear() {
        this.clientRects.clear();
        this.entityRects.clear();
    }
}