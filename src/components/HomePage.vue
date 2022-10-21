<template>
  <HeaderComponent
    v-on:add="add"
    v-bind:titleProperty="bookListTitle"
  ></HeaderComponent>
  <div class="content">
    <b-container>
      <div style="max-width: 60rem; text-align: center; display: flex; flex-wrap: wrap;">
        <BookComponent
          v-for="book in books.value"
          :key="book.id"
          :book="book"
        ></BookComponent>
      </div>
    </b-container>
  </div>
</template>
<script>
import { reactive, onBeforeUpdate } from "vue";

import HeaderComponent from "./HeaderComponent";
import BookComponent from "./BookComponent";

export default {
  name: "HomePage",
  props: {
    msg: String,
  },
  components: {
    HeaderComponent,
    BookComponent,
  },
  setup() {
    const bookListTitle = "書籍列表";

    const books = reactive([]);

    async function add(value) {
      console.log("add", value);
    }

    async function getBooks() {
      try {
        const response = await fetch(
          "https://fe-interview-api.unnotech.com/books"
        );
        if (response) {
          books.value = await response.json();
          console.log(books.value);
        }
      } catch (error) {
        console.error(error);
        alert(error.message);
      }
    }

    getBooks();

    onBeforeUpdate(() => {
      console.log("onBeforeUpdate");
    });

    return {
      bookListTitle,
      books,
      add,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content {
  background-color: #d3d3d3;
}
</style>
