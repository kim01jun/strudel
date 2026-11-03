setcps(157/60/4)

let drums = stack(
  s("<circuitsdrumtracks_bd rim>*4"),
  s("sh*8"),
)

let hihat = s("hh*4")

let bass = note(`
<
    [g1@2 g1!6]
    [g1!4 g1@2 a1@2]

    [b1@2 b1!6]
    [b1!6 f#2@2]

    [e2@2 e2!6]
    [e2!4 e2@2 d2@2]

    [c2@2 c2!6]
    [c2!4 c2@2 b1@2]
  >
`)
  .sound("gm_slap_bass_2")
  .decay(0.4)
  .sustain(0.7)
  .gain(1.1)

let guitar1 = note(`
<
    [g1!8]
    [g1!6 a1!2]

    [b1!8]
    [b1!6 f#2!2]

    [e2!8]
    [e2!6 d2!2]

    [c2!8]
    [c2!6 b1!2]
  >
`)
  .sound("gm_electric_guitar_jazz")

let keyboard = note(`
<
 [b2, d3, f#3]@2
 [eb3, f#3 ,a3]@2
 [b2, d3, g3]@2
 [c3, e3, a3]
 [c3, eb3, g3]
>
`)
  .sound("gm_synth_strings_2")
  .gain(0.2)

let vocal = note(`
<
    ~!7
    [~ ~ ~ eb3]

    [b3 ~ ~ [a3 b3]]
    [~ ~ ~ [g3 a3]]

    [b3 b3 b3 [d4 b3]]
    [~ ~ b3 g4]

    [f#4 f#4 f#4 g4]
    [f#4 d4 b3 [a3 g3]]

    [g3 ~ ~ [e3 g3]]
    [~ ~ ~ d3]

    [b3 ~ ~ [a3 b3]]
    [~ ~ ~ [g3 a3]]

    [b3 b3 b3 [d4 b3]]
    [~ ~ b3 g4]

    [f#4 f#4 f#4 g4]
    [f#4 d4 b3 [a3 g3]]

    [g3 ~ ~ [e3 g3]]
    [~ ~ ~ f#3]


    [g3 a3 b3 d4@2 b3@2 a3]
    [a3 b3 a3 b3]

    [d#4 [b3 a3] a3 b3]
    [f#3@2 g3 ~]

    [[e3 g3] g3 b3 [a3 g3]]
    [g3@2 ~@2 e3 g@3]

    [a3 b3 a3 c4]
    [b3 g3 g3 ~]

    [g3 a3 b3 d4@2 b3@2 a3]
    [a3 b3 a3 b3]

    [d#4 [b3 a3] a3 b3]
    [f#3@2 g3 ~]

    [[e3 g3] g3 b3 [a3 g3]]
    [g3@2 ~@2 e3 g@3]

    [a3 b3 a3 c4]
    [b3 [g3 f#3] f#3 g3]

    [g3 a3 b3 d4 ~ ~ g3 a3]
    [b3 d4 ~ ~ g3 e4 d4@2]

    [g3 a3 b3 d4 ~ ~ g3 a3]
    [b3 d4 ~ ~ g3 c4 b3@2]

    [g3 a3 b3 d4 ~ ~ g3 a3]
    [b3 d4 ~ ~ g3 e4 d4@2]

    [g3 a3 b3 d4 ~ ~ g3 a3]
    [b3 d4 ~ ~ g3 c4 b3@2]



    [b3 ~ ~ [a3 b3]]
    [~ ~ ~ [g3 a3]]

    [b3 b3 b3 [d4 b3]]
    [~ ~ b3 g4]

    [f#4 f#4 f#4 g4]
    [f#4 d4 b3 [a3 g3]]

    [g3 ~ ~ [e3 g3]]
    [~ ~ ~ d3]

    [b3 ~ ~ [a3 b3]]
    [~ ~ ~ [g3 a3]]

    [b3 b3 b3 [d4 b3]]
    [~ ~ b3 g4]

    [f#4 f#4 f#4 g4]
    [f#4 d4 b3 [a3 g3]]

    [g3 ~ ~ [e3 g3]]
    [~ ~ ~ d3]

    [d4 b3 b3 a3@2 g3@2 g3]
    [d4 b3 b3 a3@2 g3@2 f#3]

    [g3 g3 a3@2 b3@2 a3 g3]
    [a3 b3 ~@2 g3 g3 a3 g3]

    [d4 b3 b3 a3@2 g3@2 g3]
    [d4 b3 b3 a3@2 g3@2 e3]

    [g3 g3 a3@2 b3@2 a3 g3]
    [g3@2 b3@2 a3 g3@3]


    [g3 a3 b3 d4@2 b3@2 a3]
    [a3 b3 a3 b3]

    [d#4 [b3 a3] a3 b3]
    [f#3@2 g3 ~]

    [[e3 g3] g3 b3 [a3 g3]]
    [g3@2 ~@2 e3 g@3]

    [a3 b3 a3 c4]
    [b3 g3 g3 ~]

    [g3 a3 b3 d4@2 b3@2 a3]
    [a3 b3 a3 b3]

    [d#4 [b3 a3] a3 b3]
    [f#3@2 g3 ~]

    [[e3 g3] g3 b3 [a3 g3]]
    [g3@2 ~@2 e3 g@3]

    [a3 b3 a3 c4]
    [b3 [g3 f#3] f#3 g3]

    [g3 a3 b3 d4 ~ ~ g3 a3]
    [b3 d4 ~ ~ g3 e4 d4@2]

    [g3 a3 b3 d4 ~ ~ g3 a3]
    [b3 d4 ~ ~ g3 c4 b3@2]

    [g3 a3 b3 d4 ~ ~ g3 a3]
    [b3 d4 ~ ~ g3 e4 d4@2]

    [g3 a3 b3 d4 ~ ~ g3 a3]
    [b3 d4 ~ ~ g3 c4 b3@2]

>
`).sound("gm_koto")

let open_hihat = s("<oh ~ ~ ~>")

let masekd_drums = drums.mask("<1@24 1@24 1@16 1@7 0 1@24>")
let masked_bass = bass.mask("<1@23 0 1@24 0@16 1@7 0 1@24>")
let masked_hihat = hihat.mask("<0@24 1@24 0@24 1@24>")
let masked_guitar1 = guitar1.mask("<0@24 1@24 0@8 1@15 0 1@24>")
let masked_keyboard = keyboard.mask("<0@24 1@24 1@23 0 1@24>")
let masked_open_hihat = open_hihat.mask("<0@24 0@24 0@8 1@18>")

stack(
  masekd_drums,
  masked_bass,
  masked_hihat,
  masked_guitar1,
  masked_keyboard,
  masked_open_hihat,
  vocal,
)
  .mask("<1@96 0@16>")
  // .early(93)

// intro: 8 drum + bass
// verse1 16 drum + bass + vocal

// chorus1 16  drum + bass + vocal + guitar1 + guitar2 + keyboard + hihat
// chorus2 8 drum + bass + vocal + guitar1 + guitar2 + keyboard + hihat

// verse2-1 8 drum + keyboard
// verse2-2 8 drum + keyboard + guitar + open hihat per 4
// verse2-3 8 drum + keyboard + guitar + bass + open hihat per 4

// chorus1 16  drum + bass + vocal + guitar1 + guitar2 + keyboard + hihat
// chorus2 8 drum + bass + vocal + guitar1 + guitar2 + keyboard + hihat

