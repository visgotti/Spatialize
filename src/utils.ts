import { Rect } from './interfaces';

export function rectsColliding(rect1: Rect, rect2: Rect) : boolean {
    return (
        rect1.x < rect2.x + rect2.width &&
        rect1.x + rect1.width > rect2.x &&
        rect1.y < rect2.y + rect2.height &&
        rect1.height + rect1.y > rect2.y
    )
}