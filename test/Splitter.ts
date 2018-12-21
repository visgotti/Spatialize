import * as assert from 'assert';
import * as mocha from 'mocha'
import * as fs from 'fs';
import * as path from 'path';

import { Splitter } from '../src/core/Splitter';
import { Rect } from '../src/interfaces';

describe('Splitter', function() {

    describe('Splitter.getLineSections', function() {
        it('Correctly sections a line evenly when divisor is a factor of dividend', function(done) {
            const expected = [{ start: 0, length: 10 }, { start: 10, length: 10 }, { start: 20, length: 10 }];
            assert.deepStrictEqual(expected, Splitter.getLineSections(0, 30, 3));
            done();
        });
        it('Correctly sections a line with integers if wholeNumbers is passed as true', function(done) {
            const expected = [{ start: 0, length: 33 }, { start: 33, length: 33 }, { start: 66, length: 34 }];
            assert.deepStrictEqual(expected, Splitter.getLineSections(0, 100, 3, true));
            done();
        });
        it('Correctly sections a line with decimals if wholeNumbers is passed as true', function(done) {
            const sections = Splitter.getLineSections(0, 100, 3, false);
            const firstSection = sections[0];

            assert.deepStrictEqual(firstSection.length < 33.4 && firstSection.length > 33.3, true);

            for(let i = 1; i < sections.length; i++) {
                assert.deepStrictEqual(firstSection.length, sections[i].length);
            }
            done();
        });
    });

    describe('Splitter.splitGridIntoRects', function() {
        let rects: Array<Rect>;
        before((done) => {
            rects = Splitter.splitGridIntoRects(0, 0, 500, 500, 3, 6, true);
            done();
        });
        it('Correctly creates the first rect in grid', function(done) {
            assert.deepStrictEqual(rects[0], { x: 0, width: 166, height: 83, y: 0 });
            done();
        });
        it('Correctly creates the second rect in grid', function(done) {
            assert.deepStrictEqual(rects[1], {  x: 166,  width: 166, height: 83, y: 0});
            done();
        });
        it('Last column in first row should have excess width', function(done) {
            assert.deepStrictEqual(rects[2], { x: 332, width: 168, y: 0, height: 83 });
            done();
        });
        it('First column in last row should have excess height', function(done) {
            assert.deepStrictEqual(rects[15], { x: 0, width: 166,y: 415,  height: 85 });
            done();
        });
        it('Last column and last row should have both excess height and width', function(done) {
            assert.deepStrictEqual(rects[17], { x: 332, y: 415, width: 168, height: 85 });
            done();
        });
    });

    describe('Splitter.splitGridIntoRectsByCellSize', function() {
        let rects: Array<Rect>;
        it('Correctly creates 100 cells', function(done) {
            rects = Splitter.splitGridIntoRectsByCellSize(0, 0, 500, 500, 50);
            assert.deepStrictEqual(rects.length, 100);
            done();
        });
        it('Correctly creates extra column of cells if the width overflows', function(done) {
            rects = Splitter.splitGridIntoRectsByCellSize(0, 0, 501, 500, 50);
            assert.deepStrictEqual(rects.length, 110);
            done();
        });
        it('Correctly creates extra row of cells if the height overflows', function(done) {
            rects = Splitter.splitGridIntoRectsByCellSize(0, 0, 500, 501, 50);
            assert.deepStrictEqual(rects.length, 110);
            done();
        });
        it('Correctly creates extra row and column if height and width overflow', function(done) {
            rects = Splitter.splitGridIntoRectsByCellSize(0, 0, 501, 501, 50);
            assert.deepStrictEqual(rects.length, 121);
            done();
        });
    })
});