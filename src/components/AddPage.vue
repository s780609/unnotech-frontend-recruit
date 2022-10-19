<template>
  <HeaderComponent v-bind:titleProperty="add"></HeaderComponent>
  <div>Add Page</div>
</template>

<script>
import HeaderComponent from "./HeaderComponent";

export default {
  name: "AddPage",
  setup() {

    return {
      add: "新增書本"
     };
  },
  components: {
    HeaderComponent: HeaderComponent,
  },
};
</script>

<style></style>
