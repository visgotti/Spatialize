import { Bucket } from './Bucket';
import { Rect } from '../interfaces';

export class AreaRect  {
    private buckets: Array<Bucket>;
    public areaIndex: number;
    public rect: Rect;
    constructor(areaIndex, rect) {
        this.areaIndex = areaIndex;
        this.rect = rect;
        this.buckets = [];
    }

    addBucket(bucket) {
        this.buckets.push(bucket);
    }

    getBuckets() {
        return this.buckets;
    }

    getEntities() {
    }
};

