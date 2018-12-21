import * as assert from 'assert';
import * as mocha from 'mocha'
import * as fs from 'fs';
import * as path from 'path';

import { SpatialManager } from '../src/core/SpatialManager';
import { Rect } from '../src/interfaces';

describe('SpatialManager', function() {
    it('SpatialManager.constructor initializes correctly', function (done) {
        const spatialManager = new SpatialManager(500, 500, 3, 3, 50);
        assert.strictEqual(spatialManager.getAreaRects().length, 9);
        assert.strictEqual(spatialManager.getBuckets().length, 100);
        done();
    });
})