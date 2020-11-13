import { readonly, computed } from 'vue'

const noteType = readonly({
    WHITE: 'white',
    BLACK: 'black'
})
const notesNames = {
    A     : 'A',
    ASHARP: 'A#',
    B     : 'B',
    C     : 'C',
    CSHARP: 'C#',
    D     : 'D',
    DSHARP: 'D#',
    E     : 'E',
    F     : 'F',
    FSHARP: 'F#',
    G     : 'G',
    GSHARP: 'G#',
}
const notes = readonly({
    [notesNames.A]     : { name: notesNames.A     , type: noteType.WHITE },
    [notesNames.ASHARP]: { name: notesNames.ASHARP, type: noteType.BLACK },
    [notesNames.B]     : { name: notesNames.B     , type: noteType.WHITE },
    [notesNames.C]     : { name: notesNames.C     , type: noteType.WHITE },
    [notesNames.CSHARP]: { name: notesNames.CSHARP, type: noteType.BLACK },
    [notesNames.D]     : { name: notesNames.D     , type: noteType.WHITE },
    [notesNames.DSHARP]: { name: notesNames.DSHARP, type: noteType.BLACK },
    [notesNames.E]     : { name: notesNames.E     , type: noteType.WHITE },
    [notesNames.F]     : { name: notesNames.F     , type: noteType.WHITE },
    [notesNames.FSHARP]: { name: notesNames.FSHARP, type: noteType.BLACK },
    [notesNames.G]     : { name: notesNames.G     , type: noteType.WHITE },
    [notesNames.GSHARP]: { name: notesNames.GSHARP, type: noteType.BLACK },
})

const getNote = noteName => computed(() => notes[noteName])

const getters = {
    getNote
}

export default function useNote () {
    return {
        noteType,
        notesNames,
        notes,
        ...getters
    }
}
