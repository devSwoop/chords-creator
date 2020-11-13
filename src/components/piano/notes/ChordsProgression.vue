<template>
    <div class="chords-progression">
        <piano-chord
            v-for="chord in progression"
            :key="chord.id"
            :chord="chord"
        />
    </div>
</template>

<script>
    import PianoChord from "@/components/piano/notes/PianoChord"
    import useChord from "@/use/Chord"

    export default {
        name: "ChordsProgression",
        components: {
            PianoChord
        },
        setup () {
            const { progression } = useChord()

            return {
                progression
            }
        }
    }
</script>
