<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Home from './components/Home.vue'
import "bootstrap/dist/css/bootstrap.min.css"
</script>

<template>
  <div class="">
    <Home />
    <router-view></router-view>
  </div>
</template>


<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lora&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Source+Serif+Pro&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

router-view {
  Header {
    display: none;
  }
}

:root {
  --ff: 'Bebas Neue',
    cursive;
  --fc: #f2460d
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: hsl(30.967741935483897,
      79.48717948717947%,
      92.3529411764706%);
  padding: 10px;
}

h1,
h2,
h3,
h4,
h5,
p,
span,
a,
button {
  font-family: var(--ff);
  color: var(--fc);
  list-style-type: none;
  text-decoration: none;
}
</style>

