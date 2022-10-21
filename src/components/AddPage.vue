<template>
  <HeaderComponent v-bind:titleProperty="add"></HeaderComponent>
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
            style="background-color: white; border: transparent;height: 10rem"
          >
            <template #prepend>
              <b-input-group-text
                style="background-color: white; border: transparent;"
                >備註</b-input-group-text
              >
            </template>
            <b-form-textarea
              style="background-color: white; border: transparent"
              v-model="bookDescription"
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
import HeaderComponent from "./HeaderComponent";

export default {
  name: "AddPage",
  setup() {
    const bookTitle = ref();
    const bookAuthor = ref();
    const bookDescription = ref();

    const postData = async () => {
      if (!checkTitle(bookTitle.value) || !checkAuthor(bookAuthor.value)) {
        alert("名稱與作者必填");
        return;
      }

      try {
        const response = await fetch(
          "https://fe-interview-api.unnotech.com/books/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: `author=${bookAuthor.value}&title=${bookTitle.value}&description=${bookDescription.value}`,
          }
        );

        if (response) {
          const jsonResult = await response.json();
          if (jsonResult) {
            alert("新增成功");
          }
        } else {
          throw new Error(await response.text());
        }
      } catch (error) {
        console.error(error);
        alert(error.msg);
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
      add: "新增書本",
      bookTitle,
      bookAuthor,
      bookDescription,
      postData,
    };
  },
  components: {
    HeaderComponent: HeaderComponent,
  },
};
</script>

<style scoped></style>
