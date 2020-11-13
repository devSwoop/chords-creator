<template>
    <div class="piano-roll-note" :style="{ height: pianoRollLineHeight + 'pt' }">
    </div>
</template>

<script>
    export default {
        name: "PianoRollNote",
        props: {
            note: {
                type: Object,
                required: true
            }
        },
        inject: ['pianoRollLineHeight']
    }
</script>

<style lang="sass" scoped>
    .piano-roll-note
        color: var(--piano-roll-color)
        border-bottom: 1pt solid var(--grid-helpers-color)

        &.is-light
            background: var(--piano-roll-light-stripe)

        &.is-dark
            background: var(--piano-roll-dark-stripe)
</style>