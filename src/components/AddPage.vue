<template>
  <HeaderComponent v-bind:titleProperty="add"></HeaderComponent>
  <div style="background-color: #d3d3d3">
    <b-container style="margin: 0.5rem">
      <b-card style="background-color: #d3d3d3; border: transparent">
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
            style="background-color: white; border: transparent"
          >
            <template #prepend>
              <b-input-group-text
                style="background-color: white; border: transparent"
                >備註</b-input-group-text
              >
            </template>
            <b-form-input
              style="background-color: white; border: transparent"
              v-model="bookDescription"
            ></b-form-input>
          </b-input-group>
          <br />
          <div>
            <b-button>取消</b-button>&nbsp;
            <b-button variant="primary" v-on:click="postData">新增</b-button>
          </div>
        </b-card-body>
      </b-card>
    </b-container>
  </div>
</template>

<script>
import { reactive } from "@vue/reactivity";
import HeaderComponent from "./HeaderComponent";

export default {
  name: "AddPage",
  setup() {
    const bookTitle = reactive();
    const bookAuthor = reactive();
    const bookDescription = reactive();

    const postData = async () => {
      console.log(bookTitle.value);
      return;
      // try {
      //   const response = await fetch(
      //     "https://fe-interview-api.unnotech.com/books/",
      //     {
      //       method: "POST",
      //       body: "author=TEST&title=New Book&description=TEST",
      //     }
      //   );

      //   if (response) {
      //     const jsonResult = await response.json();
      //     if (jsonResult) {
      //       alert("Add Successful");
      //     }
      //   } else {
      //     throw new Error(await response.text());
      //   }
      // } catch (error) {
      //   console.error(error);
      //   alert(error.msg);
      // }
    };

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

<style></style>
