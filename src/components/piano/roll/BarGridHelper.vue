<template>
    <grid-helper
        class="grid-helpers-bar"
        v-for="index in displayedBarAmount"
        :key="index"
        :border-width="barBorderWidth"
    >
        <grid-helper
            class="grid-helpers-beat"
            v-for="beatIndex in 4"
            :key="beatIndex"
            :border-width="beatBorderWidth"
        >
            <grid-helper
                class="grid-helpers-step"
                v-for="stepIndex in 4"
                :key="stepIndex"
                :border-width="stepBorderWidth"
            />
        </grid-helper>
    </grid-helper>
</template>

<script>
    import GridHelper from "@/components/piano/roll/GridHelper"

    export default {
        name: "BarGridHelper",
        components: {
            GridHelper
        },
        inject: [
            'barBorderWidth',
            'displayedBarAmount',
            'beatBorderWidth',
            'stepBorderWidth',
        ]
    }
</script>

<style lang="sass" scoped>
    .grid-helpers-bar
        .grid-helpers-beat
            opacity: .5
            &:last-child
                border: 0 none

            .grid-helpers-step
                opacity: .5
                &:last-child
                    border: 0 none
</style>