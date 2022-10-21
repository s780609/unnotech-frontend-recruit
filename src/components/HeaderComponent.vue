<template>
  <div class="header">
    <span v-if="pageType !== 'list'" class="back" v-on:click="handleBack"
      >back</span
    >
    {{ title }}
    <span v-if="pageType === 'list'" class="add" v-on:click="handleAdd">+</span>
    <span v-if="pageType === 'detail'" class="detail" v-on:click="handleEdit"
      >Edit</span
    >
  </div>
</template>

<script>
import { onBeforeUpdate, ref } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "HeaderComponent",
  props: {
    titleProperty: String,
    pageTypeProperty: String,
    bookIdProperty: String,
  },
  setup(props, { emit }) {
    const router = useRouter();

    const bookId = ref(props.bookIdProperty);
    const title = ref(props.titleProperty);
    
    const handleAdd = () => {
      emit("add", "add");
      router.push("/add");
    };

    const handleEdit = () => {
      router.push(`/edit/${bookId.value}`);
    };

    const handleBack = () => {
      router.push("/");
    };

    onBeforeUpdate(() => {
      title.value = props.titleProperty;
    });

    return {
      pageType: props.pageTypeProperty,
      bookId,
      title,
      handleAdd,
      handleEdit,
      handleBack,
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

.detail {
  float: right;
  margin-right: 10%;
  cursor: pointer;
}

.back {
  float: left;
  cursor: pointer;
}
</style>
