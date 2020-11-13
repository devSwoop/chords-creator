import { reactive, computed } from 'vue'
import useNote from "@/use/Note";

const { notes, notesNames } = useNote()

const state = reactive({
    rootNote     : notes[notesNames.C],
    octavesNumber: 11
})

const rootNote      = computed(() => state.rootNote)
const octavesNumber = computed(() => state.octavesNumber)

const notesOctave = computed(() => {
    const octaveFirstPart  = []
    const octaveSecondPart = []
    let   octavePart       = octaveSecondPart

    for (const noteName in notes) {
        const note = notes[noteName]

        if (note.name === rootNote.value.name) {
            octavePart = octaveFirstPart
        }
        octavePart.push(note)
    }
    return octaveFirstPart.concat(octaveSecondPart)
})

const fullOctaves = computed(() => {
    const octaves = []
    const length  = octavesNumber.value

    for (let i = 0; i < length; i++) {
        let octaveNotes = notesOctave.value.map(note => {
            return {
                ...note,
                label : note.name + i,
                id    : note.name + i,
                octave: i
            }
        })

        octaveNotes.id = i

        octaves.push(octaveNotes)
    }

    return octaves;
})

const getNoteOnPiano = (noteName, octaveId) => computed(() => {
    for (const octave of fullOctaves.value) {
        for (const note of octave) {
            if (note.name === noteName && octave.id === octaveId) {
                return note
            }
        }
    }

    return null
})

const getNoteIndexOnPiano = note => computed(() => {
    return notesOctave.value.findIndex(octaveNote => octaveNote.name === note.name)
})

const getters = {
    rootNote,
    octavesNumber,
    notesOctave,
    fullOctaves,
    getNoteOnPiano,
    getNoteIndexOnPiano
}

const mutations = {
    setRootNote (note) {
        state.rootNote = notes[note]
    }
}

export default function usePiano () {
    return {
        ...getters,
        ...mutations
    }
}
