import { reactive, computed } from 'vue'
import useNote from './Note'
import usePiano from "@/use/Piano"

const { notesNames } = useNote()
const { getNoteOnPiano } = usePiano()

const state = reactive({
    progression: [
        {
            id: 'uniqueId',
            notes: [
                { ...(getNoteOnPiano(notesNames.C, 9).value), step: 4, size: 4 },
                { ...(getNoteOnPiano(notesNames.E, 9).value), step: 4, size: 4 },
                { ...(getNoteOnPiano(notesNames.G, 9).value), step: 4, size: 4 },
            ]
        },
        {
            id: 'uniqueId3',
            notes: [
                { ...(getNoteOnPiano(notesNames.D, 9).value), step: 20, size: 4 },
                { ...(getNoteOnPiano(notesNames.F, 9).value), step: 20, size: 6 },
                { ...(getNoteOnPiano(notesNames.A, 9).value), step: 20, size: 8 },
            ]
        }
    ]
})

const progression = computed(() => state.progression)

const getters = {
    progression
}

export default function useChord () {
    return {
        ...getters
    }
}
