import { Scene } from "excalibur";
import { Fish } from "../fish";
import { KevinCCucumber } from "../kevinCCucumber";
import { BetterShark } from "../betterShark";
import { TravisScottFish } from "../travisScottFish";
import { TheDeep } from "../theDeep";
import { Bomb } from "../bomb";
import { ScoreLabel } from "../score";
import { Background } from "../background";
import { Player } from "../player";
import { Bobber } from "../bobber";

export class Levelone extends Scene {

    score = 0;
    scoreLabel;

    onInitialize(engine) {
        console.log("start de game!");

        const bg = new Background();
        this.add(bg);

        // speler
        this.player = new Player(engine.drawWidth / 2, engine.drawHeight * 0.3);
        this.add(this.player);

        // dobber
        this.bobber = new Bobber(this.player);
        this.add(this.bobber);

        const minUnderPlayer = this.player.pos.y + 100;
        const layerHeight = 80;
        
        const normalTop = minUnderPlayer;
        const normalBottom = normalTop + layerHeight;
        
        const kevinTop = normalBottom + 25;
        const kevinBottom = kevinTop + layerHeight;
        
        const sharkTop = kevinBottom + 25;
        const sharkBottom = sharkTop + layerHeight;
        
        const travisTop = sharkBottom + 25;
        const travisBottom = travisTop + layerHeight;
        
        const deepTop = travisBottom + 25;
        const deepBottom = deepTop + layerHeight;
        
        const bombTop = minUnderPlayer;
        const bombBottom = engine.drawHeight - 40;

        for (let i = 0; i < 6; i++) {
            const fish = new Fish(
                this.getSpawnX(engine),
                this.randomBetween(normalTop, normalBottom),
                5,
                undefined,
                normalTop,
                normalBottom
            );
            this.add(fish);
        }

        for (let i = 0; i < 4; i++) {
            const fish = new KevinCCucumber(
                this.getSpawnX(engine),
                this.randomBetween(kevinTop, kevinBottom),
                kevinTop,
                kevinBottom
            );
            this.add(fish);
        }

        for (let i = 0; i < 3; i++) {
            const fish = new BetterShark(
                this.getSpawnX(engine),
                this.randomBetween(sharkTop, sharkBottom),
                console.log("shark loaded"),
                sharkTop,
                sharkBottom
            );
            this.add(fish);
        }

        for (let i = 0; i < 3; i++) {
            const fish = new TravisScottFish(
                this.getSpawnX(engine),
                this.randomBetween(travisTop, travisBottom),
                travisTop,
                travisBottom
            );
            this.add(fish);
        }

        for (let i = 0; i < 1; i++) {
            const fish = new TheDeep(
                this.getSpawnX(engine),
                this.randomBetween(deepTop, deepBottom),
                deepTop,
                deepBottom
            );
            this.add(fish);
        }

        for (let i = 0; i < 1; i++) {
            const bomb = new Bomb(
                this.getSpawnX(engine),
                this.randomBetween(bombTop, bombBottom),
                bombTop,
                bombBottom
            );
            this.add(bomb);
        }

        this.scoreLabel = new ScoreLabel();
        this.add(this.scoreLabel);
    }

    getSpawnX(engine) {
        return Math.random() * 220 + engine.drawWidth;
    }

    randomBetween(min, max) {
        return Math.random() * (max - min) + min;
    }

    onPreUpdate(engine) {

        if (engine.input.keyboard.wasPressed("Space")) {

            this.bobber.drop();

        }
    }
}