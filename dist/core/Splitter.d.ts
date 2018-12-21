import { Rect, LineSection } from '../interfaces';
/**
 *
 * @type {Splitter}
 */
export declare class Splitter {
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
    static splitGridIntoRects(startX: any, startY: any, width: number, height: number, columns: number, rows: number, wholeNumbers?: boolean): Array<Rect>;
    /**
     * @param {number} startX - where your grid starts on x axis
     * @param {number} startY - where your grid starts on y axis
     * @param {number} width - width of map
     * @param {number} height - height of map
     * @param {number} cellSize - width and height of each cell
     * @returns {Array<Rect>} - array of rectangles indexed in order.
     */
    static splitGridIntoRectsByCellSize(startX: any, startY: any, width: any, height: any, cellSize: any): any[];
    /**
     * splits a line into sections
     * @param start - start position on line
     * @param length - length of line
     * @param splits - number of times you want to split the line (2 will produce 3 sections, 3 would produce 4, etc)
     * @param wholeNumbers - use whole numbers when splitting
     * @returns {Array<LineSection>} - array of splits indexed in order
     */
    static getLineSections(start: number, length: number, splits: number, wholeNumbers?: boolean): Array<LineSection>;
}
