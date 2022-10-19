<template>
  <HeaderComponent v-on:add="add" v-bind:titleProperty="list"></HeaderComponent>
  <div class="content">
    <div>{{ list }}</div>
  </div>
</template>
<script>
import HeaderComponent from "./HeaderComponent";

export default {
  name: "HomePage",
  props: {
    msg: String,
  },
  components: {
    HeaderComponent: HeaderComponent,
  },
  setup() {
    const list = "書籍列表";

    const add = (value) => {
      console.log("add", value);
    };

    function onBeforeUpdate() {
      console.log("onBeforeUpdate");
    }

    return {
      list,
      add,
      onBeforeUpdate,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content {
  background-color: #898989;
}
</style>
