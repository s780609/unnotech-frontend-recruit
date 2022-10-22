<template>
  <div class="header">
    <span
      v-if="pageType !== 'list' && pageType !== 'edit'"
      class="material-symbols-outlined back"
      v-on:click="handleBack"
      >arrow_back_ios_new</span
    >
    <span
      v-if="pageType === 'edit'"
      class="material-symbols-outlined back"
      v-on:click="handleBack"
      >arrow_back_ios_new</span
    >
    <span clss="title">{{ title }}</span>
    <span
      v-if="pageType === 'list'"
      class="material-symbols-outlined add"
      v-on:click="handleAdd"
      >add</span
    >
    <span
      v-if="pageType === 'detail'"
      v-on:click="handleEdit"
      class="material-symbols-outlined detail"
      >edit</span
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

    const pageType = ref(props.pageTypeProperty);
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
      if (pageType.value.toString() === "edit") {
        router.push(`/detail/${bookId.value}`);
      } else {
        router.push(`/`);
      }
    };

    onBeforeUpdate(() => {
      title.value = props.titleProperty;
    });

    return {
      pageType,
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

.title {
  font-size: 0.5rem;
}

.add {
  float: right;
  color: blue;
  margin: 1vh 0 0 0;
  cursor: pointer;
  font-size: 3rem;
}

.detail {
  float: right;
  margin: 1vh 0 0 0;
  cursor: pointer;
  font-size: 2.5rem;
}

.back {
  float: left;
  margin: 1vh 0 0 0;
  cursor: pointer;
  font-size: 2.5rem;
}
</style>
