<template>
  <form @submit.prevent="handleClearForm">
    <div class="field">
      <label class="label">Name (Contains)</label>
      <div class="control">
        <input class="input" type="text" @keyup="handleSearch" v-model="form.name">
      </div>
    </div>

    <div class="field">
      <label class="label">Minimum Score</label>
      <div class="control">
        <input class="input" type="text" placeholder="Text input" @keyup="handleSearch" v-model="form.rating">
      </div>
    </div>

    <div class="field">
      <label class="label">Order By</label>
      <div class="field is-grouped">
        <div class="columns">
          <div class="column">
            <div class="control">
              <div class="select">
                <select v-model="form.orderBy" @change="handleOrder">
                  <option value="date">Release Date</option>
                  <option value="name">Name</option>
                  <option value="rating">Score</option>
                </select>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="control">
              <div class="select">
                <select v-model="form.sort" @change="handleOrder">
                  <option value="true">ASC</option>
                  <option value="false">DESC</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>



    <div class="field is-grouped">
      <div class="control">
        <button class="button is-link">Clear</button>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import {defineComponent, reactive} from "vue";
import store from "@/store";
import {FILTER_GAMES, FILTER_ORDER} from "@/store/mutation-types";

export default defineComponent({
  name: "FilterComponent",
  setup() {

    const form = reactive({
        name: '',
        orderBy: null,
        rating: null,
        sort: 'true'
    });

    const handleSearch = () => store.commit(FILTER_GAMES, form);
    const handleOrder = () => store.commit(FILTER_ORDER, form);
    const handleClearForm = () => {
        form.name ='';
        form.orderBy = null;
        form.rating = null;
        form.sort = 'true';
        store.commit(FILTER_GAMES, form);
        store.commit(FILTER_ORDER, form);
    }



    return{
      handleSearch,
      form,
      handleClearForm,
      handleOrder
    }
  }
})
</script>

<style scoped lang="scss">
form {
  text-align: left;
  .label {
    color: #ffffff;
  }

  input, select {
    background-color: #182c47;
    border: 1px solid #182c47 ;
    color: #ffffff;
  }
}
</style>