<template>
  <b-col>
    <b-card :title="title" style="max-width: 20rem;">
      <b-card-text>
        {{ author }}
      </b-card-text>
      <b-card-text>
        {{ description }}
      </b-card-text>
    </b-card>
  </b-col>
</template>

<script>
import { reactive } from "vue";

export default {
  name: "BookComponent",
  props: ["book"],
  setup(props) {
    console.log(props.book);
    const title = reactive(props.book.title);
    const author = reactive(props.book.author);
    const description = reactive(props.book.description);
    return { title, author, description };
  },
};
</script>

<style></style>
