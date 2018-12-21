import { Rect, LineSection } from '../interfaces';
import { rectsColliding } from '../utils';

/**
 *
 * @type {Splitter}
 */
export class Splitter {
    /**
     * @param {number} startX - where your grid starts on x axis
     * @param {number} startY - where your grid starts on y axis
     * @param {number} width - width of map
     * @param {number} height - height of map
     * @param {number} columns - number of columns you want grid to have
     * @param {number} rows - number of rows you want grid to have
     * @param {boolean} wholeNumbers - if you want your rects full numbers or not.
     * @returns {Array<Rect>} - array of rectangles indexed in order.
     */
    static splitGridIntoRects(startX, startY, width: number, height: number, columns: number, rows:number, wholeNumbers=true) : Array<Rect>{
        let rowSections = this.getLineSections(startY, height, rows, wholeNumbers);
        let columnSections = this.getLineSections(startX,  width, columns, wholeNumbers);

        let rects = [];

        for(let i = 0; i < rowSections.length; i++) {
            let rowStart = rowSections[i].start;
            let rowHeight = rowSections[i].length;

            for(let j = 0; j < columnSections.length; j++) {
                let columnStart = columnSections[j].start;
                let columnWidth = columnSections[j].length;
                const rect: Rect = { x: columnStart, width: columnWidth, y: rowStart, height: rowHeight };
                rects.push(rect);
            }
        }
        return rects;
    }

    /**
     * @param {number} startX - where your grid starts on x axis
     * @param {number} startY - where your grid starts on y axis
     * @param {number} width - width of map
     * @param {number} height - height of map
     * @param {number} cellSize - width and height of each cell
     * @returns {Array<Rect>} - array of rectangles indexed in order.
     */
    static splitGridIntoRectsByCellSize(startX, startY, width, height, cellSize) {
        const rows = Math.ceil(height / cellSize);
        const columns = Math.ceil(width / cellSize);

        let x = startX;
        let y = startY;

        const rects = [];

        for(let i = 0; i < rows; i++) {
            for(let j = 0; j < columns; j++) {
                const rect: Rect = { x, y, width: cellSize, height: cellSize };
                rects.push(rect);
                if(x/cellSize >= columns - 1) {
                    x = startX;
                    y += cellSize;
                } else {
                    x += cellSize;
                }
            }
        }
        return rects;
    }


    /**
     * splits a line into sections
     * @param start - start position on line
     * @param length - length of line
     * @param splits - number of times you want to split the line (2 will produce 3 sections, 3 would produce 4, etc)
     * @param wholeNumbers - use whole numbers when splitting
     * @returns {Array<LineSection>} - array of splits indexed in order
     */
    static getLineSections(start: number, length: number, splits: number, wholeNumbers = true) : Array<LineSection> {
        let newLength = length / splits;
        let _splits = [];
        if(!wholeNumbers || Number.isInteger(newLength)) {
            for(let i = splits; i > 0; i--) {
                const section: LineSection = { start, length: newLength };
                _splits.push(section);
                start+=newLength
            }
        } else {
            let roundedDownLength = Math.floor(newLength);
            let offsetLength = length - (roundedDownLength * (splits - 1));

            for(let i = splits; i > 0; i--) {
                const isOffsetSection = (i === 1);

                newLength = isOffsetSection ? offsetLength : roundedDownLength;

                const section: LineSection = { start, length: newLength };
                _splits.push(section);
                start += roundedDownLength;
            }
        }
        return _splits
    }
};