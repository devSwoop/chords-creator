<template>
    <div class="piano-keyboard">
        <octaves-iterator canPad>
            <template v-slot:pair="{ notePair }">
                <piano-keyboard-key
                    v-for="note in notePair"
                    :key="note.label"
                    :note="note"
                    :class="{
                        'is-wider': note.isWider,
                        'is-shrink': note.isShrink
                    }"
                />
            </template>
        </octaves-iterator>
    </div>
</template>

<script>
    import PianoKeyboardKey from "@/components/piano/keyboard/PianoKeyboardKey"
    import OctavesIterator from "@/components/piano/notes/OctavesIterator"

    export default {
        name: "PianoKeyboard",

        components: {
            PianoKeyboardKey,
            OctavesIterator
        },

        inject: ['notes', 'noteType']
    }
</script>

<style lang="sass" scoped>
.piano-keyboard
    display: flex
    flex-direction: column-reverse

    ::v-deep .octaves.is-top-padded
        margin-top: calc(var(--piano-keyboard-black-key-height) / 2)

    ::v-deep .octaves, ::v-deep .octave, ::v-deep .notes-wrapper
        display: flex
        flex-direction: column-reverse

        .notes-wrapper
            position: relative
</style>
