basic.forever(function () {
    basic.showIcon(IconNames.Yes)
    basic.pause(200)
    basic.showString("hi!")
    music.playMelody("- - - - - - - - ", 120)
    basic.setLedColors(0xff0000, 0xb09eff, 0x65471f)
})
