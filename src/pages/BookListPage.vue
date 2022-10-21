<template>
  <HeaderComponent
    :pageTypeProperty="pageType"
    v-bind:titleProperty="bookListTitle"
    v-on:add="add"
  ></HeaderComponent>
  <div class="content">
    <b-container>
      <div
        style="
          max-width: 60rem;
          text-align: center;
          display: flex;
          flex-wrap: wrap;
        "
      >
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
import { ref, reactive, onBeforeUpdate } from "vue";

import HeaderComponent from "../components/HeaderComponent";
import BookComponent from "../components/BookComponent";

export default {
  name: "HomePage",
  props: {},
  components: {
    HeaderComponent,
    BookComponent,
  },
  setup() {
    const bookListTitle = "書籍列表";

    const pageType = ref("list");
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
      pageType,
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
