import { Rect } from '../interfaces';
export declare class View {
    id: string;
    areaIndex: number;
    bucketIndexes: Array<number>;
    private width;
    private height;
    private viewRect;
    constructor(id: any, width: any, height: any, x?: number, y?: number);
    updateViewRect(x: any, y: any): Rect;
    getViewRect(): Rect;
}
