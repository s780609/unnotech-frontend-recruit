<template>
  <HeaderComponent
    :pageTypeProperty="pageType"
    v-bind:titleProperty="bookListTitle"
    v-on:add="add"
  ></HeaderComponent>
  <div class="content">
    <b-container>
      <div class="wrap">
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
import { ref, reactive, onMounted } from "vue";

import HeaderComponent from "../components/HeaderComponent";
import BookComponent from "../components/BookComponent";

import { common } from "../lib/common.js";

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
      books.value = await common.getBooks();
    }

    onMounted(() => {
      getBooks();
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

.wrap {
  max-width: 60rem;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
}
</style>
