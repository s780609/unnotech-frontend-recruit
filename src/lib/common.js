const common = {
  apiEndpoint: process.env.VUE_APP_API_ENDPOINT,
  async getBookInfoById(bookId) {
    try {
      const response = await fetch(`${this.apiEndpoint}/books/${bookId}/`);

      if (response) {
        return await response.json();
      }
    } catch (error) {
      console.error(error);
    }
  },
  async getBooks() {
    try {
      const response = await fetch(`${this.apiEndpoint}/books`);
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
      const response = await fetch(`${this.apiEndpoint}/books/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `author=${body.author}&title=${body.title}&description=${body.descryption}&image=${body.image}`,
      });

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
      const response = await fetch(`${this.apiEndpoint}/books/${bookId}/`, {
        method: "PATCH",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (response) {
        return await response.json();
      }
    } catch (error) {
      console.error(error);
    }
  },
  async deleteBookById(bookId) {
    try {
      const response = await fetch(`${this.apiEndpoint}/books/${bookId}/`, {
        method: "DELETE",
      });

      if (response) {
        return await response.json();
      }
    } catch (error) {
      console.error(error);
    }
  },
  getDefaultImgLink() {
    console.log(process.env.BASE_URL);
    return `${process.env.BASE_URL}/${process.env.VUE_APP_DEFAULT_JPG}`;
  },
};

export default common;
