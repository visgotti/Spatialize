import { Splitter } from './Splitter';
import { AreaRect } from './AreaRect';
import { Rect } from '../interfaces';
import { Bucket } from './Bucket';
import { rectsColliding } from '../utils';

export class SpatialManager {
    private entities: Map<string, any>;
    private areaRects: Array<AreaRect>;
    private buckets: Array<Bucket>;
    private width: number;
    private height: number;
    private areaColumns: number;
    private areaRows: number;
    private bucketColumns: number;
    private bucketRows: number;
    private bucketSize: number;

    constructor(width, height, areaColumns, areaRows, bucketSize) {
        this.width = width;
        this.height = height;
        this.areaRects = [];
        this.buckets = [];
        this.areaColumns = areaColumns;
        this.areaRows = areaRows;
        this.bucketSize = bucketSize;

        this.initializeAreaBuckets();
        this.initializeViewBuckets();
        this.addAreasToBuckets();
    }

    private initializeAreaBuckets() {
        const rects = Splitter.splitGridIntoRects(0, 0, this.width, this.height, this.areaColumns, this.areaRows, true);
        for(let i = 0; i < rects.length; i++) {
            this.areaRects.push(new AreaRect(i, rects[i]));
        }
    }

    private initializeViewBuckets() {
        this.bucketColumns = Math.ceil(this.width / this.bucketSize);
        this.bucketRows = Math.ceil(this.height / this.bucketSize);
        const buckets = Splitter.splitGridIntoRectsByCellSize(0, 0, this.width, this.height, this.bucketSize);
        for(let i = 0; i < buckets.length; i++) {
            this.buckets[i] = new Bucket(i, buckets[i]);
        }
    }

    private addAreasToBuckets() {
        for(let i = 0; i < this.areaRects.length; i++) {
            for(let j = 0; j < this.buckets.length; j++) {
                if(rectsColliding(this.areaRects[i].rect, this.buckets[j].rect)) {
                    this.buckets[j].addAreaIndex(i);
                    this.areaRects[i].addBucket(this.buckets[j]);
                }
            }
        }
    }

    getAreaRects() {
        return this.areaRects;
    }

    getBuckets() {
        return this.buckets;
    }
};

