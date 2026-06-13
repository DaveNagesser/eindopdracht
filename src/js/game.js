import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode, CollisionType } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { StartScene } from './scenes/startscene.js'
import { Levelone } from './scenes/levelone.js'

export class Game extends Engine {
    constructor() {
        super({ 
            width: 1280,
            height: 720,
            maxFps: 60,
            displayMode: DisplayMode.FitScreen
         })
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        this.addScene("start", new StartScene())
        this.addScene("levelOne", new Levelone())
        this.goToScene("start")

    }

}

new Game()