function Characters () {
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        .........fff............
        .......ff555ff..........
        ......f5555555f.........
        .....f555555555f........
        ....f55555f55555f.......
        ....f555555555ff........
        ...f5555555fff..........
        ...f55555ff.............
        ...f5555555fff..........
        ....f555555555ff........
        ....f55555555555f.......
        .....f555555555f........
        ......f5555555f.........
        .......ff555ff..........
        .........fff............
        ........................
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Player))
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        .........fff............
        .......ff333ff..........
        ......f3333333f.........
        .....f333333333f........
        ....f33333f33333f.......
        ....f333333333ff........
        ...f3333333fff..........
        ...f33333ff.............
        ...f3333333fff..........
        ....f333333333ff........
        ....f33333333333f.......
        .....f333333333f........
        ......f3333333f.........
        .......ff333ff..........
        .........fff............
        ........................
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Player))
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setPosition(143, 106)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).setPosition(11, 11)
    mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One))
    mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Two))
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setStayInScreen(true)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).setStayInScreen(true)
    ghost = sprites.create(img`
        . . . . . . . e c 7 . . . . . . 
        . . . . e e e c 7 7 e e . . . . 
        . . c e e e e c 7 e 2 2 e e . . 
        . c e e e e e c 6 e e 2 2 2 e . 
        . c e e e 2 e c c 2 4 5 4 2 e . 
        c e e e 2 2 2 2 2 2 4 5 5 2 2 e 
        c e e 2 2 2 2 2 2 2 2 4 4 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 4 2 e 
        . e e e 2 2 2 2 2 2 2 2 2 4 e . 
        . 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
        . . 2 e e 2 2 2 2 2 4 4 2 e . . 
        . . . 2 2 e e 4 4 4 2 e e . . . 
        . . . . . 2 2 e e e e . . . . . 
        `, SpriteKind.Enemy)
    ghost2 = sprites.create(img`
        . . . . . . . . . . . 6 6 6 6 6 
        . . . . . . . . . 6 6 7 7 7 7 8 
        . . . . . . 8 8 8 7 7 8 8 6 8 8 
        . . e e e e c 6 6 8 8 . 8 7 8 . 
        . e 2 5 4 2 e c 8 . . . 6 7 8 . 
        e 2 4 2 2 2 2 2 c . . . 6 7 8 . 
        e 2 2 2 2 2 2 2 c . . . 8 6 8 . 
        e 2 e e 2 2 2 2 e e e e c 6 8 . 
        c 2 e e 2 2 2 2 e 2 5 4 2 c 8 . 
        . c 2 e e e 2 e 2 4 2 2 2 2 c . 
        . . c 2 2 2 e e 2 2 2 2 2 2 2 e 
        . . . e c c e c 2 2 2 2 2 2 2 e 
        . . . . . . . c 2 e e 2 2 e 2 c 
        . . . . . . . c e e e e e e 2 c 
        . . . . . . . . c e 2 2 2 2 c . 
        . . . . . . . . . c c c c c . . 
        `, SpriteKind.Enemy)
    ghost3 = sprites.create(img`
        . . . . . . . . . . b b b . . . 
        . . . . . . . . b e e 3 3 b . . 
        . . . . . . b b e 3 2 e 3 a . . 
        . . . . b b 3 3 e 2 2 e 3 3 a . 
        . . b b 3 3 3 3 3 e e 3 3 3 a . 
        b b 3 3 3 3 3 3 3 3 3 3 3 3 3 a 
        b 3 3 3 d d d d 3 3 3 3 3 d d a 
        b b b b b b b 3 d d d d d d 3 a 
        b d 5 5 5 5 d b b b a a a a a a 
        b 3 d d 5 5 5 5 5 5 5 d d d d a 
        b 3 3 3 3 3 3 d 5 5 5 d d d d a 
        b 3 d 5 5 5 3 3 3 3 3 3 b b b a 
        b b b 3 d 5 5 5 5 5 5 5 d d b a 
        . . . b b b 3 d 5 5 5 5 d d 3 a 
        . . . . . . b b b b 3 d d d b a 
        . . . . . . . . . . b b b a a . 
        `, SpriteKind.Enemy)
    ghost4 = sprites.create(img`
        4 4 4 . . 4 4 4 4 4 . . . . . . 
        4 5 5 4 4 5 5 5 5 5 4 4 . . . . 
        b 4 5 5 1 5 1 1 1 5 5 5 4 . . . 
        . b 5 5 5 5 1 1 5 5 1 1 5 4 . . 
        . b d 5 5 5 5 5 5 5 5 1 1 5 4 . 
        b 4 5 5 5 5 5 5 5 5 5 5 1 5 4 . 
        c d 5 5 5 5 5 5 5 5 5 5 5 5 5 4 
        c d 4 5 5 5 5 5 5 5 5 5 5 1 5 4 
        c 4 5 5 5 d 5 5 5 5 5 5 5 5 5 4 
        c 4 d 5 4 5 d 5 5 5 5 5 5 5 5 4 
        . c 4 5 5 5 5 d d d 5 5 5 5 5 b 
        . c 4 d 5 4 5 d 4 4 d 5 5 5 4 c 
        . . c 4 4 d 4 4 4 4 4 d d 5 d c 
        . . . c 4 4 4 4 4 4 4 4 5 5 5 4 
        . . . . c c b 4 4 4 b b 4 5 4 4 
        . . . . . . c c c c c c b b 4 . 
        `, SpriteKind.Enemy)
    ghost.follow(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 25)
    ghost2.follow(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 30)
    ghost3.follow(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)), 25)
    ghost4.follow(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)), 30)
    ghost.setStayInScreen(true)
    ghost2.setStayInScreen(true)
    ghost3.setStayInScreen(true)
    ghost4.setStayInScreen(true)
    mp.setPlayerState(mp.playerSelector(mp.PlayerNumber.One), MultiplayerState.life, 3)
    mp.setPlayerState(mp.playerSelector(mp.PlayerNumber.Two), MultiplayerState.life, 3)
    mp.setPlayerState(mp.playerSelector(mp.PlayerNumber.One), MultiplayerState.score, 0)
    mp.setPlayerState(mp.playerSelector(mp.PlayerNumber.Two), MultiplayerState.score, 0)
    if (mp.getPlayerState(mp.playerSelector(mp.PlayerNumber.One), MultiplayerState.score) == 50) {
        game.gameOver(true)
        game.splash("You win!")
    }
    if (mp.getPlayerState(mp.playerSelector(mp.PlayerNumber.Two), MultiplayerState.score) == 50) {
        game.gameOver(true)
        game.splash("You win!")
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    let coins: number[] = []
    for (let value of coins) {
        mp.changePlayerStateBy(mp.playerSelector(mp.PlayerNumber.One), MultiplayerState.score, 1)
        mp.changePlayerStateBy(mp.playerSelector(mp.PlayerNumber.Two), MultiplayerState.score, 1)
    }
})
mp.onLifeZero(function (player2) {
    game.gameOver(false)
    game.splash("Game over!")
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    mp.changePlayerStateBy(mp.playerSelector(mp.PlayerNumber.One), MultiplayerState.life, -1)
    mp.changePlayerStateBy(mp.playerSelector(mp.PlayerNumber.Two), MultiplayerState.life, -1)
})
let ghost4: Sprite = null
let ghost3: Sprite = null
let ghost2: Sprite = null
let ghost: Sprite = null
scene.setBackgroundColor(15)
Characters()
