<template>
    <section class="custom-piano">
        <piano-keyboard class="custom-piano-keyboard" />
        <piano-roll class="custom-piano-roll" />
    </section>
</template>

<script>
    import { provide } from 'vue'
    import PianoRoll from "@/components/piano/roll/PianoRoll"
    import PianoKeyboard from "@/components/piano/keyboard/PianoKeyboard"
    import usePiano from "@/use/Piano"
    import useNote from "@/use/Note"
    import useScale from "@/use/Scale"
    import useRoll from "@/use/Roll"

    export default {
        name: "CustomPiano",
        components: {
            PianoRoll,
            PianoKeyboard
        },
        setup () {
            const { rootNote, fullOctaves, octavesNumber } = usePiano()
            const { notes, notesNames, noteType } = useNote()
            const { selectedScale } = useScale()
            const { pianoRollLineHeight, blackKeyHeight, whiteKeyHeight, whiteKeyHeightWide, stepWidth } = useRoll()

            provide('rootNote'           , rootNote)
            provide('notes'              , notes)
            provide('noteType'           , noteType)
            provide('notesNames'         , notesNames)
            provide('fullOctaves'        , fullOctaves)
            provide('selectedScale'      , selectedScale)
            provide('pianoRollLineHeight', pianoRollLineHeight.value)
            provide('blackKeyHeight'     , blackKeyHeight)
            provide('whiteKeyHeight'     , whiteKeyHeight)
            provide('whiteKeyHeightWide' , whiteKeyHeightWide)
            provide('octavesNumber'      , octavesNumber)
            provide('stepWidth'          , stepWidth)
        }
    }
</script>

<style lang="sass" scoped>
.custom-piano
    display: flex
    flex-direction: row
    flex: 1
    height: 100vh
    overflow-y: scroll

    &::-webkit-scrollbar
        display: none

    .custom-piano-roll
        height: max-content
        flex: 30

    .custom-piano-keyboard
        height: max-content
        flex: 2
</style>
