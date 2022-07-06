namespace SpriteKind {
    export const Decoration = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite3,
    [img`
        .............fffcc..................
        .............fbbddc.................
        ..............fbbddfffffffff........
        ..............fcbcfbbbbbbbbbf.......
        ...........ffffccbbffb111cbbf.......
        ccccc....ffcccbbbbbff111111bf.......
        cbbbdc..fccccbbcbcbb1133cc1f........
        .cbbddcfcccccbcbcbbb1c131ccf........
        ..fbbdbccccccbcbcbbb111111f.........
        ..fcbbccccccccbbbbb1111111f.........
        ..fccbffcccccccbbbb111111f..........
        .fcbbf.cbdbcccccbbbc1111c...........
        .fbbf...cddddddfbbbc11cc............
        fbbf.....ccdddfbbdbffc..............
        fff........ccfbbdbf.................
        .............fffff..................
        `,img`
        ..............fffcc.................
        ..............fbbddc................
        ...............fbbddc...............
        ...............fcbbccffffff.........
        ..............ffcccbbbbbbbbfff......
        ccccc......fffcbbbbbbbbbbbbbbbf.....
        cbbbdc...ffcccbbbbcbcbffbbbbbcb.....
        .cbbddcffcccccbbbcbcbbff1111bbb.....
        ..fbbdbcccccccbbbcbcb11111111bf.....
        ..fcbbcccccccccbbbbbb11c33cccf......
        ..fccbffccccccccbbbb11cc131cf.......
        .fcbbf..cbdbcccccbbb1111c33f........
        .fbbf....ccdddddfbbbc1111ff.........
        fbbf.......ccddfbbdbf1ccc...........
        fff..........cfbbdbfcc..............
        ..............fffff.................
        `],
    100,
    true
    )
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite3,
    [img`
        ....................ccfff...........
        ..........fffffffffcbbbbf...........
        .........fbbbbbbbbbfffbf............
        .........fbb111bffbbbbff............
        .........fb11111ffbbbbbcff..........
        .........f1cccc11bbcbcbcccf.........
        ..........fc1c1c1bbbcbcbcccf...ccccc
        ............c3331bbbcbcbccccfccddbbc
        ...........c333c1bbbbbbbcccccbddbcc.
        ...........c331c11bbbbbcccccccbbcc..
        ..........cc13c111bbbbccccccffbccf..
        ..........c111111cbbbcccccbbc.fccf..
        ...........cc1111cbbbfdddddc..fbbcf.
        .............cccffbdbbfdddc....fbbf.
        ..................fbdbbfcc......fbbf
        ...................fffff.........fff
        `,img`
        ...........fffffff...ccfff..........
        ..........fbbbbbbbffcbbbbf..........
        ..........fbb111bbbbbffbf...........
        ..........fb11111ffbbbbff...........
        ..........f1cccc1ffbbbbbcff.........
        ..........ffc1c1c1bbcbcbcccf........
        ...........fcc3331bbbcbcbcccf..ccccc
        ............c333c1bbbcbcbccccfcddbbc
        ............c333c1bbbbbbbcccccddbcc.
        ............c333c11bbbbbccccccbbcc..
        ...........cc331c11bbbbccccccfbccf..
        ...........cc13c11cbbbcccccbbcfccf..
        ...........c111111cbbbfdddddc.fbbcf.
        ............cc1111fbdbbfdddc...fbbf.
        ..............cccfffbdbbfcc.....fbbf
        ....................fffff........fff
        `],
    350,
    true
    )
})
info.onCountdownEnd(function () {
    game.over(true)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite3,
    [img`
        ...........fffcc....................
        ...........fbbbbcfffffffff..........
        ............fbfffbbbbbbbbbf.........
        ............ffbbbbffb111bbf.........
        ..........ffcbbbbbff11111bf.........
        .........fcccbcbcbb11cccc1f.........
        ccccc...fcccbcbcbbb1c1c1cf..........
        cbbddccfccccbcbcbbb1333c............
        .ccbddbcccccbbbbbbb1c333c...........
        ..ccbbcccccccbbbbb11c133c...........
        ..fccbffccccccbbbb111c31cc..........
        ..fccf.cbbcccccbbbc111111c..........
        .fcbbf..cdddddfbbbc1111cc...........
        .fbbf....cdddfbbdbffccc.............
        fbbf......ccfbbdbf..................
        fff.........fffff...................
        `,img`
        ..........fffcc...fffffff...........
        ..........fbbbbcffbbbbbbbf..........
        ...........fbffbbbbb111bbf..........
        ...........ffbbbbff11111bf..........
        .........ffcbbbbbff1cccc1f..........
        ........fcccbcbcbb1c1c1cff..........
        ccccc..fcccbcbcbbb1333ccf...........
        cbbddcfccccbcbcbbb1c333c............
        .ccbddcccccbbbbbbb1c333c............
        ..ccbbccccccbbbbb11c333c............
        ..fccbfccccccbbbb11c133cc...........
        ..fccfcbbcccccbbbc11c31cc...........
        .fcbbf.cdddddfbbbc111111c...........
        .fbbf...cdddfbbdbf1111cc............
        fbbf.....ccfbbdbfffccc..............
        fff........fffff....................
        `],
    350,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy(effects.spray, 100)
    info.changeScoreBy(1)
})
let Myfood: Sprite = null
let Mydecor: Sprite = null
let mySprite3: Sprite = null
scene.setBackgroundColor(9)
scene.setBackgroundImage(assets.image`ocean2`)
mySprite3 = sprites.create(img`
    ...........fffffff...ccfff..........
    ..........fbbbbbbbffcbbbbf..........
    ..........fbb111bbbbbffbf...........
    ..........fb11111ffbbbbff...........
    ..........f1cccc1ffbbbbbcff.........
    ..........ffc1c1c1bbcbcbcccf........
    ...........fcc3331bbbcbcbcccf..ccccc
    ............c333c1bbbcbcbccccfcddbbc
    ............c333c1bbbbbbbcccccddbcc.
    ............c333c11bbbbbccccccbbcc..
    ...........cc331c11bbbbccccccfbccf..
    ...........cc13c11cbbbcccccbbcfccf..
    ...........c111111cbbbfdddddc.fbbcf.
    ............cc1111fbdbbfdddc...fbbf.
    ..............cccfffbdbbfcc.....fbbf
    ....................fffff........fff
    `, SpriteKind.Player)
controller.moveSprite(mySprite3)
mySprite3.setStayInScreen(true)
info.startCountdown(15)
for (let index = 0; index < 10; index++) {
    Mydecor = sprites.create(img`
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        .....88.........
        .....868........
        ......868.......
        .......868......
        .......866......
        .......8676.....
        ......67656.....
        .....656758.....
        ....65775868....
        ....65656868....
        ....87678868....
        ....87678668....
        ....87677668....
        ....8776768.....
        .....87678......
        ......8768......
        `, SpriteKind.Decoration)
    Mydecor.setPosition(randint(0, 160), 96)
}
animation.runImageAnimation(
mySprite3,
[img`
    ...........fffcc....................
    ...........fbbbbcfffffffff..........
    ............fbfffbbbbbbbbbf.........
    ............ffbbbbffb111bbf.........
    ..........ffcbbbbbff11111bf.........
    .........fcccbcbcbb11cccc1f.........
    ccccc...fcccbcbcbbb1c1c1cf..........
    cbbddccfccccbcbcbbb1333c............
    .ccbddbcccccbbbbbbb1c333c...........
    ..ccbbcccccccbbbbb11c133c...........
    ..fccbffccccccbbbb111c31cc..........
    ..fccf.cbbcccccbbbc111111c..........
    .fcbbf..cdddddfbbbc1111cc...........
    .fbbf....cdddfbbdbffccc.............
    fbbf......ccfbbdbf..................
    fff.........fffff...................
    `,img`
    ..........fffcc...fffffff...........
    ..........fbbbbcffbbbbbbbf..........
    ...........fbffbbbbb111bbf..........
    ...........ffbbbbff11111bf..........
    .........ffcbbbbbff1cccc1f..........
    ........fcccbcbcbb1c1c1cff..........
    ccccc..fcccbcbcbbb1333ccf...........
    cbbddcfccccbcbcbbb1c333c............
    .ccbddcccccbbbbbbb1c333c............
    ..ccbbccccccbbbbb11c333c............
    ..fccbfccccccbbbb11c133cc...........
    ..fccfcbbcccccbbbc11c31cc...........
    .fcbbf.cdddddfbbbc111111c...........
    .fbbf...cdddfbbdbf1111cc............
    fbbf.....ccfbbdbfffccc..............
    fff........fffff....................
    `],
200,
true
)
game.onUpdateInterval(1000, function () {
    Myfood = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 7 7 7 . . . . . . 
        . . . . 2 2 2 7 2 2 2 2 . . . . 
        . . . 2 2 2 2 7 2 2 2 2 2 . . . 
        . . . 2 2 2 2 2 2 2 2 2 2 . . . 
        . . . 2 2 2 2 2 2 2 2 2 2 . . . 
        . . . 2 2 2 2 2 2 2 2 2 2 . . . 
        . . . 2 2 2 2 2 2 2 2 2 2 . . . 
        . . . 2 2 2 2 2 2 2 2 2 2 . . . 
        . . . . 2 2 2 2 2 2 2 2 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
    Myfood.setPosition(scene.screenWidth(), randint(5, 115))
    Myfood.vx = -75
})
