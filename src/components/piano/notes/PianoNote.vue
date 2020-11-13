<template>
    <div
        class="piano-note"
        :style="{
            height,
            width,
            top: y,
            left: x
        }"
    >
        <span>{{note.label}}</span>
    </div>
</template>

<script>
    import useRoll from "@/use/Roll"
    import usePiano from "@/use/Piano"

    export default {
        name: "PianoNote",
        props: {
            note: {
                type: Object,
                required: true
            }
        },
        inject: ['pianoRollLineHeight', 'octavesNumber'],
        setup () {
            const { stepWidth } = useRoll()
            const { getNoteIndexOnPiano } = usePiano()

            return {
                stepWidth,
                getNoteIndexOnPiano
            }
        },
        computed: {
            x () {
                return (this.note.step * this.stepWidth) + '%'
            },

            y () {
                const octave          = this.octavesNumber.value - this.note.octave - 1
                const positionInScale = this.getNoteIndexOnPiano(this.note).value
                const offset          = 11 - positionInScale

                return (octave * 12 * this.pianoRollLineHeight + offset * this.pianoRollLineHeight) + 'pt'
            },

            height () {
                return this.pianoRollLineHeight + 'pt'
            },

            width () {
                return (this.note.size * this.stepWidth) + '%'
            }
        }
    }
</script>

<style lang="sass" scoped>
    .piano-note
        position: absolute
        top: 0
        left: 0
        background: var(--piano-note-bg)
        z-index: 1
        border-radius: var(--piano-note-border-radius)
        display: flex
        justify-content: flex-start
        align-items: center

        span
            margin-left: .5em
</style>
