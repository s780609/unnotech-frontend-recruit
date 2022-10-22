<template>
  <HeaderComponent
    :pageTypeProperty="pageType"
    :bookIdProperty="id"
    v-bind:titleProperty="title"
  ></HeaderComponent>
  <div style="background-color: #d3d3d3">
    <b-container style="background-color: #d3d3d3">
      <b-card
        style="
          background-color: #d3d3d3;
          border: transparent;
          width: 30rem;
          height: 50rem;
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
              style="background-color: white; border: transparent"
              v-model="description"
            ></b-form-textarea>
          </b-input-group>
          <br />
          <div>
            <b-button style="border-radius: 2rem; width: 43%; float: left"
              >取消</b-button
            >&nbsp;
            <b-button
              style="border-radius: 2rem; width: 43%; float: right"
              variant="primary"
              v-on:click="patchBookById"
              >修改</b-button
            >
          </div>
        </b-card-body>
      </b-card>
    </b-container>
  </div>
</template>
<script>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

import HeaderComponent from "../components/HeaderComponent.vue";

import { common } from "../lib/common.js";

export default {
  name: "BookEditPage",
  setup() {
    const route = useRoute();

    const pageType = ref("edit");
    const id = ref();
    const title = ref("{{書籍名稱}}");
    const author = ref();
    const description = ref();

    let defaultId = undefined;
    if (route.path) {
      const matchs = route.path.match(/\d+/g);
      defaultId = matchs[0];
    }
    id.value = defaultId;

    async function getBookInfoById(bookId) {
      const bookInfo = await common.getBookInfoById(bookId);
      id.value = bookInfo.id;
      title.value = bookInfo.title;
      author.value = bookInfo.author;
      description.value = bookInfo.description;
    }

    async function patchBookById() {
      const response = await common.patchBookById(id.value, {
        title: title.value,
        author: author.value,
        description: description.value,
      });

      if (response) {
        alert("修改成功");
      }
    }

    onMounted(() => {
      getBookInfoById(id.value);
    });

    return {
      pageType,
      id,
      title,
      author,
      description,
      patchBookById,
    };
  },
  components: {
    HeaderComponent,
  },
};
</script>
<style></style>
