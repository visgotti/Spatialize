import * as assert from 'assert';
import * as mocha from 'mocha'
import * as fs from 'fs';
import * as path from 'path';

import { View } from '../src/core/View';
import { Rect } from '../src/interfaces';

describe('View', function() {
    describe('View.update', function() {
        let view: View;
        let view2: View;

        before('View.update', function(done) {
            view = new View(1, 777, 333);
            view2 = new View(2, 200, 200);
            done();
        });

        it('Correctly updates the centered rect', function(done) {
           // var viewRect1 = view.updateViewRect(50, 100);
          //  var viewRect2 = view2.updateViewRect(50, 100);
           // assert.deepStrictEqual(true, true);
            done();
        });
    });
});