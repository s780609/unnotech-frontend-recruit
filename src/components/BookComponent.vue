<template>
  <button class="bookCardButton" @click="toBookDetailPage">
    <b-card :title="title" class="bookCard">
      <b-card-text>
        {{ author }}
      </b-card-text>
      <b-card-text>
        {{ description }}
      </b-card-text>
    </b-card>
  </button>
</template>

<script>
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "BookComponent",
  props: ["book"],
  setup(props) {
    const router = useRouter();

    const id = ref(props.book.id);
    const title = reactive(props.book.title);
    const author = reactive(props.book.author);
    const description = reactive(props.book.description);

    function toBookDetailPage (){
      router.push(`/detail/${props.book.id}`);
    }

    return { title, author, description, id, toBookDetailPage };
  },
};
</script>

<style scoped>
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
  margin: 0rem auto;
  padding: 0rem;
  flex: 1 0 40%;
  border: transparent;
}

.bookCardButton {
  width: 20rem;
  height: 25rem;
  text-align: center;
  background-color: white;
  margin: 0.5rem;
  padding: 0rem;
  flex: 1 0 40%;
  border: transparent;
}
</style>
