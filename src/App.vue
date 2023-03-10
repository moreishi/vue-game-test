<template>
  <nav>
    <div class="container">
      <router-link to="/">Home</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>
  </nav>
  <router-view/>
</template>

<script lang="ts">
import "@/assets/App.scss";
import {defineComponent} from "vue";

export default defineComponent({
  name: 'App',
});
</script>

<style scoped lang="scss">
.container {
  text-align: left;

  a {
    font-size: 27px;
    margin-right: 2rem;
  }
}
</style>