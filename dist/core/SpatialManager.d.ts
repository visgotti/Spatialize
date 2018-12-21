import { AreaRect } from './AreaRect';
import { Bucket } from './Bucket';
export declare class SpatialManager {
    private entities;
    private areaRects;
    private buckets;
    private width;
    private height;
    private areaColumns;
    private areaRows;
    private bucketColumns;
    private bucketRows;
    private bucketSize;
    constructor(width: any, height: any, areaColumns: any, areaRows: any, bucketSize: any);
    private initializeAreaBuckets;
    private initializeViewBuckets;
    private addAreasToBuckets;
    getAreaRects(): AreaRect[];
    getBuckets(): Bucket[];
}
