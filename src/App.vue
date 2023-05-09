<template>
  <div class="mt-8">
    <the-header title="Possimpible"></the-header>
    <the-resources></the-resources>
  </div>
</template>

<script>
import TheHeader from './components/layouts/TheHeader.vue';
import TheResources from './components/prompt-resource/TheResources.vue';

export default {
  components: {
    TheHeader,
    TheResources,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap');

* {
  box-sizing: border-box;
}
html {
  font-family: 'Roboto Mono', monospace;
}

body {
  margin: 0;
  padding: 0;
  color: white;
  background-color: #121212;
}

.layout--main {
  margin-left: auto;
  margin-right: auto;
  max-width: 960px;
}

.mt-8 {
  margin-top: 8rem;
}
</style>
