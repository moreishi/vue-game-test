<template>
  <div class="card card__contact">
    <div class="card-content">

      <h1 class="title is-4">Contact</h1>
      <p class="subtitle is-6">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>

      <div class="content">
        <form @submit.prevent="handleFormSubmit">

          <div class="columns">
            <div class="column">
              <div class="field">
                <label class="label">Name</label>
                <div class="control">
                  <input class="input" type="text" />
                </div>
              </div>
            </div>

            <div class="column">
              <div class="field">
                <label class="label">Email Address</label>
                <div class="control">
                  <input class="input" type="email" />
                </div>
              </div>
            </div>
          </div>


          <div class="field">
            <label class="label">Message</label>
            <div class="control">
              <textarea class="textarea" placeholder="Textarea" />
            </div>
          </div>

          <div class="field is-grouped is-end">
            <div class="control">
              <button class="button is-link">Send</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "ContactComponent",
  setup() {

    const handleFormSubmit = () => {
      console.log('sending...');
    }

    return {
      handleFormSubmit
    }
  }
})
</script>

<style scoped lang="scss">
.card {
  text-align: start;

  .title, .subtitle, .label {
    color: #ffffff;
  }
}
</style>