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
};
