<template>
  <div class="header">
    書本列表
    <span class="add" v-on:click="handleClick">+</span>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
  name: "HeaderComponent",
  setup(props, { emit }) {
    const router = useRouter()
    //const route = useRoute()

    const handleClick = () => {
      emit("add", "add");
      router.push("/add");
    };

    return {
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
