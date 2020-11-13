<template>
    <section class="piano-roll">
        <chords-progression />
        <grid-helpers />
        <octaves-iterator>
            <template v-slot:note="{ note }">
                <piano-roll-note
                    :note="note"
                    :class="{
                        'is-light': isNoteInSelectedScale(note).value,
                        'is-dark': !isNoteInSelectedScale(note).value
                    }"
                />
            </template>
        </octaves-iterator>
    </section>
</template>

<script>
    import PianoRollNote from "@/components/piano/roll/PianoRollNote"
    import OctavesIterator from "@/components/piano/notes/OctavesIterator"
    import GridHelpers from "@/components/piano/roll/GridHelpers"
    import ChordsProgression from "@/components/piano/notes/ChordsProgression"
    import useScale from "@/use/Scale"

    export default {
        name: "PianoRoll",

        components: {
            PianoRollNote,
            OctavesIterator,
            GridHelpers,
            ChordsProgression
        },

        inject: ['selectedScale'],

        setup () {
            const { isNoteInSelectedScale } = useScale()

            return {
                isNoteInSelectedScale
            }
        }
    }
</script>

<style lang="sass" scoped>
.piano-roll
    display: flex
    flex-direction: column-reverse
    position: relative

    ::v-deep .octave, ::v-deep .notes-wrapper
        display: flex
        flex-direction: column-reverse
</style>