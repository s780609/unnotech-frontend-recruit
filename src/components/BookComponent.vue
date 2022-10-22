<template>
  <button class="bookCardButton" @click="toBookDetailPage">
    <b-card :title="title" class="bookCard">
      <b-card-body>
        <b-card-img :src="img"></b-card-img>
        <b-card-text>
          {{ author }}
        </b-card-text>
        <b-card-text>
          {{ description }}
        </b-card-text>
      </b-card-body>
    </b-card>
  </button>
</template>

<script>
import { ref, reactive, onMounted } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "BookComponent",
  props: ["book"],
  setup(props) {
    const router = useRouter();

    const id = ref(props.book.id);
    const title = reactive(props.book.title);
    const author = reactive(props.book.author);
    const description = ref(props.book.description);
    const img = ref(props.book.image);

    function toBookDetailPage() {
      router.push(`/detail/${props.book.id}`);
    }

    onMounted(() => {
      if (props.book.description) {
        if (props.book.description.length > 250) {
          description.value = props.book.description.substring(0, 200);
          description.value += "...";
        }
      }
    });

    return { title, author, description, img, id, toBookDetailPage };
  },
};
</script>

<style scoped>
.bookCard {
  width: 20rem;
  height: 30rem;
  text-align: center;
  background-color: white;
  margin: 0rem auto;
  padding: 0rem;
  flex: 1 0 40%;
  border: transparent;
}

.bookCardButton {
  width: 20rem;
  height: 30rem;
  text-align: center;
  background-color: white;
  margin: 0.5rem;
  padding: 0rem;
  flex: 1 0 40%;
  border: transparent;
}
</style>
