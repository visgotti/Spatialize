import { Bucket } from './Bucket';
import { Rect } from '../interfaces';
export declare class AreaRect {
    private buckets;
    areaIndex: number;
    rect: Rect;
    constructor(areaIndex: any, rect: any);
    addBucket(bucket: any): void;
    getBuckets(): Bucket[];
    getEntities(): void;
}
