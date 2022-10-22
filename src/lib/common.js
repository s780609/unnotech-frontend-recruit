export const common = {
  async getBookInfoById(bookId) {
    try {
      const response = await fetch(
        `https://fe-interview-api.unnotech.com/books/${bookId}/`
      );

      if (response) {
        return await response.json();
      }
    } catch (error) {
      console.error(error);
    }
  },
  async getBooks() {
    try {
      const response = await fetch(
        "https://fe-interview-api.unnotech.com/books"
      );
      if (response) {
        return await response.json();
      }
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  },
  async patchBookById(bookId, body) {
    try {
      const response = await fetch(
        `https://fe-interview-api.unnotech.com/books/${bookId}/`,
        {
          method: "PATCH",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        }
      );

      if (response) {
        return await response.json();
      }
    } catch (error) {
      console.error(error);
    }
  },
};
