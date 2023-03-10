<template>
  <div class="contact">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-5">
              <ContactComponent />
          </div>
        </div>
      </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import ContactComponent from "@/components/ContactComponent.vue";

export default defineComponent({
  name: "ContactView",
  components: {ContactComponent}
})
</script>

<style scoped lang="scss">

</style>