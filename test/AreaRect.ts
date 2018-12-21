import * as assert from 'assert';
import * as mocha from 'mocha'
import * as fs from 'fs';
import * as path from 'path';

import { SpatialManager } from '../src/core/SpatialManager';
import { Rect } from '../src/interfaces';

describe('AreaRect', function() {
    let spatialManager: SpatialManager;
    before(function(done){
        spatialManager = new SpatialManager(500, 500, 2, 2, 50);
        done();
    });
    it('Each area should have width and height of 250', function(done) {
       const areas = spatialManager.getAreaRects();
       for(let i = 0; i < areas.length; i++) {
           assert.strictEqual(areas[i].rect.width, 250);
           assert.strictEqual(areas[i].rect.height, 250);
       }
       done();
    });
    it('each area should have 25 buckets in each', function (done) {
        const areas = spatialManager.getAreaRects();
        for(let i = 0; i < areas.length; i++) {
            const bucketsInArea = areas[i].getBuckets();
            assert.strictEqual(bucketsInArea.length, 25);
        }
        done();
    });
});