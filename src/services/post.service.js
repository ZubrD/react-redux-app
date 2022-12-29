import httpService from "./http.service";

const postEndpoint = "todos/";
const postService = {
  postTask: async () => {
    const { data } = await httpService.post(postEndpoint, {
      method: "POST",
      body: JSON.stringify({
        id: "id",
        title: "New task",
        completed: false,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    return data;
  },
};

export default postService;
