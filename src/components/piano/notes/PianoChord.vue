<template>
    <piano-note
        v-for="note in chord.notes"
        :key="note.id"
        :note="note"
    />
</template>

<script>
    import PianoNote from "@/components/piano/notes/PianoNote"

    export default {
        name: "PianoChord",
        props: {
            chord: {
                type: Object,
                required: true
            }
        },
        components: {
            PianoNote
        }
    }
</script>
