import { Brick } from "./sprites/Brick";
import { Paddle } from "./sprites/Paddle";
import { Ball } from "./sprites/Ball";
import { CanvasView } from "./view/CanvasView";

export class Collision {
  checkBallCollision(ball: Ball, paddle: Paddle, view: CanvasView): void {
    if (
      ball.pos.x + ball.width > paddle.pos.x &&
      ball.pos.x < paddle.pos.x + paddle.width &&
      ball.pos.y + ball.height === paddle.pos.y
    ) {
      ball.changeYDir();
    }

    if (ball.pos.x > view.canvas.width - ball.width || ball.pos.x < 0) {
      ball.changeXDir();
    }

    if (ball.pos.y < 0) {
      ball.changeYDir();
    }
  }
}
