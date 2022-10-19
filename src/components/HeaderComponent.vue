<template>
  <div class="header">
    {{ title }}
    <span v-if="title!=='新增書本'" class="add" v-on:click="handleClick">+</span>
  </div>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  name: "HeaderComponent",
  props: {
    titleProperty: String,
  },
  setup(props, { emit }) {
    console.log(props.titleProperty);
    const router = useRouter();

    const handleClick = () => {
      emit("add", "add");
      router.push("/add");
    };

    return {
      title: props.titleProperty,
      handleClick,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  background-color: white;
  font-size: 3rem;
  text-align: center;
}

.add {
  float: right;
  margin-right: 10%;
  color: blue;
  cursor: pointer;
}
</style>
