<template>
    <div class="grid-helpers">
        <bar-grid-helper />
    </div>
</template>

<script>
    import { provide } from 'vue'
    import BarGridHelper from "@/components/piano/roll/BarGridHelper"
    import useRoll from "@/use/Roll"

    export default {
        name: "GridHelpers",
        components: {
            BarGridHelper
        },
        setup () {
            const roll = useRoll()

            provide('stepWidth'          , roll.stepWidth.value)
            provide('beatWidth'          , roll.beatWidth.value)
            provide('barWidth'           , roll.barWidth.value)
            provide('stepBorderWidth'    , roll.stepBorderWidth.value)
            provide('beatBorderWidth'    , roll.beatBorderWidth.value)
            provide('barBorderWidth'     , roll.barBorderWidth.value)
            provide('displayedBarAmount' , roll.displayedBarAmount.value)

            return { ...roll }
        }
    }
</script>

<style lang="sass" scoped>
    .grid-helpers
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 100%
        display: flex
        flex-direction: row
</style>