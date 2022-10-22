<template>
  <HeaderComponent
    v-bind:titleProperty="headerTitle"
    :pageTypeProperty="pageType"
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
              v-model="bookTitle"
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
              v-model="bookAuthor"
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
              v-model="bookDescription"
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
              style="background-color: white; border: transparent"
              v-model="imageUrl"
            ></b-form-input>
          </b-input-group>
          <br />
          <div>
            <b-button style="border-radius: 2rem; width: 43%; float: left"
              >取消</b-button
            >&nbsp;
            <b-button
              style="border-radius: 2rem; width: 43%; float: right"
              variant="primary"
              v-on:click="postData"
              >新增</b-button
            >
          </div>
        </b-card-body>
      </b-card>
    </b-container>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import HeaderComponent from "../components/HeaderComponent";

import { common } from "../lib/common.js";

export default {
  name: "AddPage",
  setup() {
    const pageType = ref("add");
    const bookTitle = ref();
    const bookAuthor = ref();
    const bookDescription = ref();
    const imageUrl = ref();

    const postData = async () => {
      if (!checkTitle(bookTitle.value) || !checkAuthor(bookAuthor.value)) {
        alert("名稱與作者必填");
        return;
      }

      try {
        const jsonResult = await common.postBook({
          title: bookTitle.value,
          author: bookAuthor.value,
          descryption: bookDescription.value,
          image: imageUrl.value,
        });
        if (jsonResult) {
          alert("新增成功");
        }
      } catch (error) {
        console.error(error);
      }
    };

    function checkTitle(title) {
      if (title) {
        return true;
      } else {
        return false;
      }
    }

    function checkAuthor(author) {
      if (author) {
        return true;
      } else {
        return false;
      }
    }

    return {
      pageType,
      headerTitle: "新增書本",
      bookTitle,
      bookAuthor,
      bookDescription,
      imageUrl,
      postData,
    };
  },
  components: {
    HeaderComponent: HeaderComponent,
  },
};
</script>

<style scoped></style>
