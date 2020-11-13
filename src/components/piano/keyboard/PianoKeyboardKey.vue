<template>
    <div class="note" :class="noteClasses" :style="noteStyle">
        <span class="label" v-if="note.type === noteType.WHITE">
            {{note.label}}
        </span>
    </div>
</template>

<script>
    export default {
        name: "PianoKeyboardKey",
        props: {
            note: {
                type: Object,
                required: true
            }
        },
        inject: ['noteType', 'rootNote', 'blackKeyHeight', 'whiteKeyHeight', 'whiteKeyHeightWide'],
        computed: {
            noteClasses () {
                return {
                    'is-black': this.note.type === this.noteType.BLACK,
                    'is-white': this.note.type === this.noteType.WHITE,
                    'is-root' : this.rootNote.value.name === this.note.name
                }
            },
            noteHeight () {
                if (this.note.type === this.noteType.BLACK) {
                    return this.blackKeyHeight
                }
                if (this.note.isWider) {
                    return this.whiteKeyHeightWide
                }
                if (this.note.isShrink) {
                    return this.blackKeyHeight
                }
                return this.whiteKeyHeight
            },
            noteStyle () {
                return {
                    height: this.noteHeight.value + 'pt'
                }
            }
        }
    }
</script>

<style lang="sass" scoped>
.note
    &.is-white
        background: var(--piano-keyboard-white-key)
        // height: var(--piano-keyboard-white-key-height)
    &.is-black
        background: var(--piano-keyboard-black-key)
        color: var(--piano-keyboard-black-key-font)
        // height: var(--piano-keyboard-black-key-height)
        position: absolute
        transform: translateY(-50%)
        border-radius: 0 var(--piano-keyboard-black-key-border-radius) var(--piano-keyboard-black-key-border-radius) 0
        top: 0
        left: 0
        z-index: 2
        width: 60%
    &.is-root
        background: var(--piano-keyboard-root-key-bg)
        color: var(--piano-keyboard-root-key-color)
    .label
        margin-right: .5em
    &.is-wider:first-child
        // height: inherit
    &.is-shrink
        // height: var(--piano-keyboard-black-key-height)
    user-select: none
    text-align: right
    display: flex
    justify-content: flex-end
    align-items: center
    font-weight: var(--piano-keyboard-font-weight)
</style>