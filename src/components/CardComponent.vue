<template>
  <div class="card">
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
          </figure>
        </div>
        <div class="media-content is-relative">
          <p class="title is-4">{{ game.name }}</p>
          <p class="subtitle is-6">Release Date: {{handleTime(game.first_release_date)}}</p>
          <div class="tags has-addons is-right is-absolute is-rating">
            <span class="tag">{{displayRating(game.rating || 0)}}</span>
          </div>
        </div>
      </div>
      <div class="content">{{game.summary}}</div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import moment from "moment";

export default defineComponent({
  name: "CardComponent",
  props: ['game'],
  setup() {

    const handleTime = (timestamp:any) => moment(timestamp).format('MMMM Do YYYY');
    const displayRating = (rating:any) => (rating / 10).toFixed(1);

    return {
      handleTime,
      displayRating
    }
  }
})
</script>

<style scoped lang="scss">
.title, .subtitle {
  color: #ffffff;
}

.is-rating {
  top: 0;
  right: 0;
  .tag {
    background-color: #5692e8;
    color: #ffffff;
    font-size: 18px !important;
  }
}
</style>