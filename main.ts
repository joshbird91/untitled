music.onEvent(MusicEvent.BackgroundMelodyRepeated, function () {
    music.play(music.stringPlayable("B A G A G F A C5 ", 118), music.PlaybackMode.UntilDone)
})
radio.setGroup(1)
