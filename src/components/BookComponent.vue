<template>
  <div class="bookDiv">
    <b-card class="bookCardButton" @click="toBookDetailPage">
      <span class="material-symbols-outlined deleteIcon" @click="handleDelete">
        delete
      </span>
      <template #header>
        <div class="mb-0">{{ title }}</div>
      </template>
      <b-card-img :src="img" top class="img"></b-card-img>
      <b-card-body>
        <b-card-text class="author"> 作者: {{ author }} </b-card-text>
        <b-card-text class="description"> {{ description }} </b-card-text>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

import common from "../lib/common.js";

import defaultImage from "../assets/default.jpg";

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
      if (description.value) {
        if (description.value.length > 30) {
          description.value = description.value.substring(0, 25);
          description.value += "...";
        }
      }

      if (title.value) {
        if (title.value.length > 15) {
          title.value = title.value.substring(0, 10);
          title.value += "...";
        }
      }

      if (!img.value || img.value === "undefined") {
        img.value = defaultImage;
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
  max-width: 48%;
  width: 50%;
  height: 100%;
  flex: 1 0 45%;
  text-align: center;
  margin: 0.5rem;
  flex: 1 0 40%;
}

.bookCardButton {
  width: 100%;
  min-height: 30vh;
  height: 100%;
  max-height: 45vh;
  font-size: 1.5vw;
  background-color: white;
  margin: 0rem auto;
  /* flex: 1 0 40%; */
  border: transparent;
  cursor: pointer;
}

.bookCardButton:hover {
  box-shadow: 0px 0px 10px 10px grey;
  transition-duration: 0.5s;
}

.description {
  font-size: 1vw;
  min-height: 15vh;
  max-height: 20vh;
}

.img {
  width: 60%;
  min-height: 10vh;
  max-height: 20vh;
}

.author {
  font-size: 1.5vw;
  min-height: 2vh;
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
