<template>
  <div class="home">
    <div class="container">
      <div class="columns">
        <div class="column is-one-third">
            <FilterComponent />
        </div>
        <div class="column">
            <p v-show="isFetching">Please wait...</p>
            <div class="columns" v-for="(game, index) in games" :key="index">
              <div class="column">
                <CardComponent :game="game" />
              </div>
            </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, computed } from 'vue';
import CardComponent from "@/components/CardComponent.vue";
import FilterComponent from "@/components/FilterComponent.vue";
import store from "@/store";
import {FETCH_GAMES} from "@/store/action-types";

export default defineComponent({
  name: 'HomeView',
  components: {CardComponent,FilterComponent},
  setup() {

    const games = computed(() => store.getters.getGames);
    const isFetching = computed(() => store.getters.getIsFetching);

    onBeforeMount(() => {
      store.dispatch(FETCH_GAMES);
    });

    return {
      games,
      isFetching
    }
  }
});
</script>
