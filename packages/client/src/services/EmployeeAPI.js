import instance from "./Instance";

export async function getBooks() {
    try {
      const response = await instance.get('/employee');
      return response;
    } catch (error) {
      console.error(error);
      return;
    }
  }
