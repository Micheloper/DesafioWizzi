<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="wrapper">
    <nav class="nav">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/boarding">Boarding</RouterLink>
    </nav>
  </div>

  <RouterView />
</template>

<style scoped>
.nav {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #1f3070;
}
.nav a {
  color: var(--color-nav-a);
  margin: 10px;
  text-decoration: none;
}
</style>
