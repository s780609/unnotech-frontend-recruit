<template>
  <HeaderComponent v-on:add="add"></HeaderComponent>
  <div class="content">
    <div>{{ a }}</div>
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
    const a = "a";

    const add = (value) => {
      console.log("add", value);
    };

    function onBeforeUpdate() {
      console.log("onBeforeUpdate");
    }

    return {
      a,
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
