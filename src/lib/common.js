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
  async postBook(body) {
    if (!body) {
      throw new Error(`body is required`);
    } else if (!body.title) {
      throw new Error(`body.title is required`);
    } else if (!body.author) {
      throw new Error(`body.author is required`);
    }

    try {
      const response = await fetch(
        "https://fe-interview-api.unnotech.com/books/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: `author=${body.title.value}&title=${body.author.value}&description=${body.descryption.value}`,
        }
      );

      if (response) {
        return await response.json();
      } else {
        throw new Error(await response.text());
      }
    } catch (error) {
      console.error(error);
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
