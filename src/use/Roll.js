import { reactive, computed } from 'vue'

const state = reactive({
    pianoRollLineHeight: 20,
    barWidth: 25,
    stepBorderWidth: 1,
    displayedBarAmount: 4
})

const pianoRollLineHeight = computed(() => state.pianoRollLineHeight)
const blackKeyHeight      = computed(() => pianoRollLineHeight.value)
const whiteKeyHeight      = computed(() => blackKeyHeight.value * 1.5)
const whiteKeyHeightWide  = computed(() => blackKeyHeight.value * 2)

const barWidth  = computed(() => state.barWidth)
const beatWidth = computed(() => barWidth.value / 4)
const stepWidth = computed(() => beatWidth.value / 4)

const stepBorderWidth = computed(() => state.stepBorderWidth)
const beatBorderWidth = computed(() => stepBorderWidth.value + 1)
const barBorderWidth  = computed(() => beatBorderWidth.value + 1)

const displayedBarAmount = computed(() => state.displayedBarAmount)

const getters = {
    stepWidth,
    beatWidth,
    barWidth,
    stepBorderWidth,
    beatBorderWidth,
    barBorderWidth,
    displayedBarAmount,
    pianoRollLineHeight,
    blackKeyHeight,
    whiteKeyHeight,
    whiteKeyHeightWide
}

export default function useRoll () {
    return {
        ...getters
    }
}
