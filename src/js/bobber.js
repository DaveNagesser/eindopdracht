import { Actor, CollisionType, Vector } from "excalibur";
import { Fish } from "./fish.js";
import { Bomb } from "./bomb.js";
import { Resources } from "./resources.js";

export class Bobber extends Actor {

    constructor(player) {

        super({
            width: 20,
            height: 20,
            collisionType: CollisionType.Active
        });
        const sc = 0.03;
        this.scale = new Vector(sc, sc);


        this.sprite = Resources.Bobber.toSprite();
        this.graphics.use (this.sprite);
        this.sprite.opacity = 0;
        this.player = player;
        this.speed = 100;
        this.goingDown = false;
        this.goingUp = false;
        this.caughtFish = null;

        this.visible = false;
        this.resetToPlayer();
    }

    resetToPlayer() {
        this.goingDown = false;
        this.goingUp = false;
        this.visible = false;
        this.sprite.opacity = 0;
        this.caughtFish = null;
        this.pos = this.player.pos.clone();
    }

    drop() {
        if (!this.goingDown && !this.goingUp) {
            this.visible = true;
            this.sprite.opacity = 1;
            this.goingDown = true;
        }
    }

    onPreUpdate(engine, delta) {
        if (!this.goingDown && !this.goingUp) {
            this.resetToPlayer();
            return;
        }

        const moveSpeed = 150 * delta / 1000;
        if (engine.input.keyboard.isHeld("ArrowLeft") || engine.input.keyboard.isHeld("a")) {
            this.pos.x -= moveSpeed;
        }
        if (engine.input.keyboard.isHeld("ArrowRight") || engine.input.keyboard.isHeld("d")) {
            this.pos.x += moveSpeed;
        }

        const minX = this.width / 2;
        const maxX = engine.drawWidth - this.width / 2;
        this.pos.x = Math.max(minX, Math.min(maxX, this.pos.x));

        if (this.goingDown) {
            this.pos.y += this.speed * delta / 1000;
            if (this.pos.y >= engine.drawHeight - this.height / 2) {
                this.resetToPlayer();
            }
        }

        if (this.goingUp) {
            this.pos.y -= this.speed * delta / 1000;

            if (this.caughtFish) {
                this.caughtFish.pos = this.pos.clone();
            }

            if (this.pos.y <= this.player.pos.y) {
                this.goingUp = false;
                if (this.caughtFish) {
                    this.scene.score += this.caughtFish.points;
                    this.scene.scoreLabel.updateScore(this.scene.score);
                    this.caughtFish.kill();
                    this.caughtFish = null;
                }
                this.resetToPlayer();
            }
        }
    }

    onCollisionStart(engine, other) {

        if (other.owner instanceof Fish && !this.caughtFish) {
            this.caughtFish = other.owner;

            if (other.owner instanceof Bomb) {
                this.scene.score = 0;
                this.scene.scoreLabel.updateScore(0);
            }

            this.goingDown = false;
            this.goingUp = true;

            console.log("vis gevangen");
        }
    }
}