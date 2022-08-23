import { Brick } from "./sprites/Brick";

import {
  BRICK_IMAGES,
  LEVEL,
  STAGE_COLS,
  STAGE_PADDING,
  BRICK_WIDTH,
  BRICK_HEIGHT,
  BRICK_PADDING,
  BRICK_ENERGY,
} from "./setup";

export function createBricks(): Brick[] {
  return LEVEL.reduce((ack, el, i) => {
    const row = Math.floor((i + 1) / STAGE_COLS);
    const col: number = i % STAGE_COLS;

    const x = STAGE_PADDING + col * (BRICK_WIDTH + BRICK_PADDING);
    const y = STAGE_PADDING + row * (BRICK_HEIGHT + BRICK_PADDING);

    if (el === 0) return ack;

    return [
      ...ack,
      new Brick(
        BRICK_WIDTH,
        BRICK_HEIGHT,
        { x, y },
        BRICK_ENERGY[el],
        BRICK_IMAGES[el]
      ),
    ];
  }, [] as Brick[]);
}
