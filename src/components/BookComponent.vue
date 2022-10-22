<template>
  <div class="bookDiv">
    <b-card class="bookCardButton" @click="toBookDetailPage">
      <span class="material-symbols-outlined deleteIcon" @click="handleDelete">
        delete
      </span>
      <template #header>
        <h4 class="mb-0">{{ title }}</h4>
      </template>
      <b-card-img :src="img" top style="width: 60%"></b-card-img>
      <b-card-body>
        <b-card-text> 作者: {{ author }} </b-card-text>
        <b-card-text> {{ description }} </b-card-text>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

import { common } from "../lib/common.js";

export default {
  name: "BookComponent",
  props: ["book"],
  setup(props, { emit }) {
    const router = useRouter();

    const id = ref(props.book.id);
    const title = ref(props.book.title);
    const author = ref(props.book.author);
    const description = ref(props.book.description);
    const img = ref(props.book.image);

    function toBookDetailPage(e) {
      if (e.target.innerText !== "delete") {
        router.push(`/detail/${props.book.id}`);
      }
    }

    async function handleDelete() {
      const ok = confirm("確定刪除?");
      if (ok) {
        const result = await common.deleteBookById(id.value);
        if (typeof result === "object") {
          alert("刪除成功");
          emit("getBooks");
        }
      }
    }

    onMounted(() => {
      if (props.book.description) {
        if (props.book.description.length > 50) {
          description.value = props.book.description.substring(0, 30);
          description.value += "...";
        }
      }
    });

    return {
      title,
      author,
      description,
      img,
      id,
      toBookDetailPage,
      handleDelete,
    };
  },
};
</script>

<style scoped>
.bookDiv {
  height: 100%;
  flex: 1 0 45%;
  text-align: center;
  margin: 0.5rem;
}

.bookCardButton {
  width: 20rem;
  min-height: 25rem;
  height: 100%;
  max-height: 30rem;
  background-color: white;
  margin: 0rem auto;
  flex: 1 0 40%;
  border: transparent;
  cursor: pointer;
}

.bookCardButton:hover {
  box-shadow: 0px 0px 10px 10px grey;
  transition-duration: 0.5s;
}

.deleteIcon {
  float: right;
  border: 1px solid;
  border-radius: 1rem;
  margin: -0.8rem -0.9rem 0 0;
  z-index: 100;
}

.deleteIcon:hover {
  background-color: red;
  transition-duration: 0.5s;
}
</style>
