<template>
  <!-- <div class="book"> -->
    <b-card :title="title" class="bookCard">
      <b-card-text>
        {{ author }}
      </b-card-text>
      <b-card-text>
        {{ description }}
      </b-card-text>
    </b-card>
  <!-- </div> -->
</template>

<script>
import { reactive } from "vue";

export default {
  name: "BookComponent",
  props: ["book"],
  setup(props) {
    const title = reactive(props.book.title);
    const author = reactive(props.book.author);
    const description = reactive(props.book.description);
    return { title, author, description };
  },
};
</script>

<style>
.book {
  width: 20rem;
  height: 25rem;
  text-align: center;
  background-color: white;
  margin: 0.5rem;
  padding: 0;
  flex: 1 0 40%;
}
.bookCard {
  width: 20rem;
  height: 25rem;
  text-align: center;
  background-color: white;
  margin: 0.5rem;
  padding: 0;
  flex: 1 0 40%;
  border: transparent;
}
</style>
