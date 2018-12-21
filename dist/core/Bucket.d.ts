import { Rect } from '../interfaces';
export declare class Bucket {
    index: number;
    rect: Rect;
    private areaIndexes;
    private clientRects;
    private entityRects;
    constructor(index: any, rect: any);
    getRect(): Rect;
    addAreaIndex(index: any): void;
    clear(): void;
}
