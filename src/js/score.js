import { Label, FontUnit, Color, Vector } from "excalibur";

export class ScoreLabel extends Label {

    constructor() {

        super({
            text: "Score : 0",
            pos: new Vector(20, 40),
            fontUnit: FontUnit.Px,
            color: Color.White,
        });
        this.scale = new Vector(2, 2);

    }

    updateScore(score) {
        this.text = "Score : " + score;
    }
}