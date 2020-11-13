import { reactive, readonly, computed } from 'vue'
import useNote from './Note'
import { types } from "@/use/ChordsType"

const { getNote, notesNames } = useNote()

const defaultScale = {
    get name() {
        return 'White notes'
    },

    get notes() {
        return readonly([
            getNote(notesNames.C),
            getNote(notesNames.D),
            getNote(notesNames.E),
            getNote(notesNames.F),
            getNote(notesNames.G),
            getNote(notesNames.B),
            getNote(notesNames.A),
        ])
    },

    get chordsType() {
        return types.TRIPLET
    }
}

const state = reactive({
    selectedScale: defaultScale
})

const selectedScale = computed(() => state.selectedScale)
const getNoteIndexInSelectedScale = note => computed(
    () => selectedScale.value.notes.findIndex(
noteScale => noteScale.value.name === note.name
    )
)
const isNoteInSelectedScale = note => computed(() => getNoteIndexInSelectedScale(note).value > -1)

const getters = {
    selectedScale,
    isNoteInSelectedScale,
    getNoteIndexInSelectedScale
}

export default function useScale () {
    return {
        ...getters
    }
}
