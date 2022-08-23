import { Vector2 } from "../types";

export class Ball {
  private speed: Vector2;
  private ballImage: HTMLImageElement = new Image();

  constructor(
    private ballSize: number,
    private position: Vector2,
    speed: number,
    image: string
  ) {
    this.ballSize = ballSize;
    this.position = position;
    this.speed = {
      x: speed,
      y: -speed,
    };
    this.ballImage.src = image;
  }

  get width(): number {
    return this.ballSize;
  }

  get height(): number {
    return this.ballSize;
  }

  get pos(): Vector2 {
    return this.position;
  }

  get image(): HTMLImageElement {
    return this.ballImage;
  }

  changeYDir(): void {
    this.speed.y = -this.speed.y;
  }

  changeXDir(): void {
    this.speed.x = -this.speed.x;
  }

  moveBall(): void {
    this.pos.x += this.speed.x;
    this.pos.y += this.speed.y;
  }
}
