import { ImageSource, Sound, Resource, Loader } from 'excalibur'

// voeg hier jouw eigen resources toe
const Resources = {
    Fish: new ImageSource('images/fish.png'),
    BG: new ImageSource('images/background2.png'),
    Player: new ImageSource('images/player.png'),
    Flopper: new ImageSource('images/flopper.png'),
    KevinCCucumber: new ImageSource('images/KevinCCucumber.png'),
    BetterShark: new ImageSource('images/BetterShark.png'),
    TravisScottFish: new ImageSource('images/travisScottFish.png'),
    TheDeep: new ImageSource('images/TheDeep.png'),
    Bomb: new ImageSource('images/Bomb.png'),
    Bobber: new ImageSource('images/bobber.png')
}




const ResourceLoader = new Loader()
for (let res of Object.values(Resources)) {
    ResourceLoader.addResource(res)
}

export { Resources, ResourceLoader }