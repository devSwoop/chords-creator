<template>
    <div
        class="octaves"
        :style="{ marginTop: canPad && formattedOctaves.isTopPadded ? (blackKeyHeight.value / 2) + 'pt' : '' }"
    >
        <div
            v-for="(octave, index) in formattedOctaves"
            :key="index" class="octave"
        >
            <div v-for="notePair in octave" :key="notePair.id" class="notes-wrapper">
                <slot name="pair" :notePair="notePair"></slot>
                <template v-for="note in notePair">
                    <slot name="note" :note="note"></slot>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "OctavesIterator",

        props: {
            canPad: {
                type: Boolean,
                default: false
            }
        },

        inject: ['fullOctaves', 'noteType', 'notesNames', 'blackKeyHeight'],

        computed: {
            formattedOctaves () {
                let formattedOctaves = this.fullOctaves.value.map(this.formatOctave)

                formattedOctaves = this.shrinkFirstWiderNote(formattedOctaves)

                return formattedOctaves
            }
        },

        methods: {
            isKeyWider (note) {
                return note.name === this.notesNames.D
                    || note.name === this.notesNames.G
                    || note.name === this.notesNames.A
            },

            getNoteByIdInFormattedOctaves(octaves, noteId) {
                for (const octave of octaves.slice().reverse()) {
                    for (const pair of octave.slice().reverse()) {
                        for (let note of pair.slice().reverse()) {
                            if (note.id === noteId) {
                                return note
                            }
                        }
                    }
                }

                return null
            },

            getNoteByIndexAndTypeInFormattedOctaves (octaves, index, type, reverse = true) {
                let noteIndex = 0
                const _octaves = reverse ? octaves.slice().reverse() : octaves

                for (const octave of _octaves) {
                    const _octave = reverse ? octave.slice().reverse() : octave

                    for (const pair of _octave) {
                        const _pair = reverse ? pair.slice().reverse() : pair

                        for (let note of _pair) {
                            if (noteIndex++ === index && note.type === type) {
                                return this.getNoteByIdInFormattedOctaves(octaves, note.id)
                            }
                        }
                    }
                }

                return null
            },

            shrinkFirstWiderNote (formattedOctaves) {
                const firstNoteIfWhite =
                    this.getNoteByIndexAndTypeInFormattedOctaves(formattedOctaves, 0, this.noteType.WHITE)
                const secondNoteIfWhite =
                    this.getNoteByIndexAndTypeInFormattedOctaves(formattedOctaves, 1, this.noteType.WHITE)
                const lastNoteIfWhite =
                    this.getNoteByIndexAndTypeInFormattedOctaves(formattedOctaves, 0, this.noteType.WHITE, false)
                const firstNoteIfBlack =
                    this.getNoteByIndexAndTypeInFormattedOctaves(formattedOctaves, 0, this.noteType.BLACK)

                if (firstNoteIfWhite) {
                    firstNoteIfWhite.isWider = false
                }

                if (secondNoteIfWhite && firstNoteIfWhite) {
                    firstNoteIfWhite.isShrink = true
                }

                if (lastNoteIfWhite) {
                    lastNoteIfWhite.isWider = false
                }

                if (firstNoteIfBlack) {
                    formattedOctaves.isTopPadded = true
                }

                return formattedOctaves
            },

            detectWiderKeys (formattedOctave) {
                for (let pair of formattedOctave) {
                    for (let note of pair) {
                        if (this.isKeyWider(note)) {
                            note.isWider = true
                        }
                    }
                }

                return formattedOctave
            },

            formatOctave (octave) {
                let   formattedOctave = []
                let   notesBuffer     = []

                for (const note of octave) {
                    notesBuffer.push(note)

                    if (note.type === this.noteType.BLACK) {
                        notesBuffer.id = note.label
                        formattedOctave.push(notesBuffer)
                        notesBuffer = []
                    }
                }

                formattedOctave.push(notesBuffer)
                formattedOctave = this.detectWiderKeys(formattedOctave)

                return formattedOctave
            }
        }
    }
</script>
