<template>
  <HeaderComponent
    :pageTypeProperty="pageType"
    :bookIdProperty="id"
    v-bind:titleProperty="title"
  ></HeaderComponent>
  <div style="background-color: #d3d3d3; height:120vh">
    <b-container style="background-color: #d3d3d3">
      <b-card
        style="
          background-color: #d3d3d3;
          border: transparent;
          width: 80vw;
          height: 90vh;
          float: none;
          margin: 0 auto;
        "
      >
        <b-card-body style="text-align: center">
          <b-input-group
            size="lg"
            style="background-color: white; border: transparent"
          >
            <template #prepend>
              <b-input-group-text
                style="background-color: white; border: transparent"
                >名稱</b-input-group-text
              >
            </template>
            <b-form-input
              readonly
              style="background-color: white; border: transparent"
              v-model="title"
            ></b-form-input>
          </b-input-group>
          <br />
          <b-input-group
            size="lg"
            style="background-color: white; border: transparent"
          >
            <template #prepend>
              <b-input-group-text
                style="background-color: white; border: transparent"
                >作者</b-input-group-text
              >
            </template>
            <b-form-input
              readonly
              style="background-color: white; border: transparent"
              v-model="author"
            ></b-form-input>
          </b-input-group>
          <br />
          <b-input-group
            size="lg"
            style="background-color: white; border: transparent; height: 10rem"
          >
            <template #prepend>
              <b-input-group-text
                style="background-color: white; border: transparent"
                >備註</b-input-group-text
              >
            </template>
            <b-form-textarea
              readonly
              style="background-color: white; border: transparent"
              v-model="description"
            ></b-form-textarea>
          </b-input-group>
          <br />
          <b-input-group
            size="lg"
            style="background-color: white; border: transparent"
          >
            <template #prepend>
              <b-input-group-text
                style="background-color: white; border: transparent"
                >圖片url</b-input-group-text
              >
            </template>
            <b-form-input
              readonly
              style="background-color: white; border: transparent"
              v-model="imageUrl"
            ></b-form-input>
          </b-input-group>
          <br />
        </b-card-body>
        <b-card-img :src="imageUrl"></b-card-img>
      </b-card>
    </b-container>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import HeaderComponent from "../components/HeaderComponent";

import { common } from "../lib/common";

export default {
  name: "AddPage",
  setup() {
    const route = useRoute();

    const pageType = ref("detail");
    const id = ref();
    const title = ref("{{書籍名稱}}");
    const author = ref();
    const description = ref();
    const imageUrl = ref();

    let defaultId = undefined;
    if (route.path) {
      const matchs = route.path.match(/\d+/g);
      defaultId = matchs[0];
    }
    id.value = defaultId;

    async function getBookInfoById(bookId) {
      const bookInfo = await common.getBookInfoById(bookId);
      if (bookInfo) {
        title.value = bookInfo.title;
        author.value = bookInfo.author;
        description.value = bookInfo.description;
        imageUrl.value = bookInfo.image;
      } else {
        console.log(`bookInfo is undefined`);
      }
    }

    onMounted(() => {
      getBookInfoById(id.value);
    });

    return {
      pageType,
      id: id,
      title: title,
      author: author,
      imageUrl: imageUrl,
      description: description,
    };
  },
  components: {
    HeaderComponent: HeaderComponent,
  },
};
</script>

<style scoped></style>
