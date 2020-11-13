<template>
    <div class="grid-helper" :style="{ borderWidth: borderWidth + 'pt' }">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "GridHelper",
        props: {
            borderWidth: {
                type: Number,
                required: true
            }
        }
    }
</script>

<style lang="sass" scoped>
.grid-helper
    display: flex
    border-top: 0 none
    border-right: solid var(--grid-helpers-color)
    border-bottom: 0 none
    border-left: 0 none
    flex: 0 0 25%
</style>