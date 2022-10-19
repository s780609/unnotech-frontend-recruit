<template>
  <HeaderComponent v-bind:titleProperty="add"></HeaderComponent>
  <div>Add Page</div>
  <button v-on:click="postData">TEST API</button>
</template>

<script>
import HeaderComponent from "./HeaderComponent";

export default {
  name: "AddPage",
  setup() {
    const postData = async () => {
      try {
        const response = await fetch(
          "https://fe-interview-api.unnotech.com/books/",
          {
            method: "POST",
            body: "author=TEST&title=New Book&description=TEST",
          }
        );

        if (response) {
          const jsonResult = await response.json();
          if (jsonResult) {
            alert("Add Successful");
          }
        } else {
          throw new Error(await response.text());
        }
      } catch (error) {
        console.error(error);
        alert(error.msg);
      }
    };

    return {
      add: "新增書本",
      postData,
    };
  },
  components: {
    HeaderComponent: HeaderComponent,
  },
};
</script>

<style></style>
