<template>
  <router-view />
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
  :root {
    --color-primary: #f04a7c;
    --color-dark: #170d10;
    --piano-roll-light-stripe: #3a272c;
    --piano-roll-dark-stripe: #332126;
    --piano-roll-color: #fff;
    --piano-keyboard-font-weight: 500;
    --piano-keyboard-white-key: #faf9fa;
    --piano-keyboard-white-font: #000;
    --piano-keyboard-white-key-striped: #f7d5df;
    --piano-keyboard-black-key: #0b0607;
    --piano-keyboard-black-key-font: #fff;
    --piano-keyboard-root-key-bg: #f04a7c;
    --piano-keyboard-root-key-color: #fff;
    --piano-keyboard-black-key-height: 2vh;
    --piano-keyboard-white-key-height: calc(var(--piano-keyboard-black-key-height) * 1.5);
    --piano-keyboard-white-key-height-wider: calc(var(--piano-keyboard-black-key-height) * 2);
    --piano-keyboard-black-key-border-radius: 2pt;
    --grid-helpers-color: #150c0e;
    --piano-note-bg: #acd698;
    --piano-note-border-radius: 2pt;
  }

  #app {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    font-family: Roboto;
    font-size: 10pt;
    overflow: hidden;
  }

  * {
    box-sizing: border-box;
  }
</style>