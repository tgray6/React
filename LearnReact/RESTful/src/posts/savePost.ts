import { INewPostData, ISavedPostId } from "./types";

export async function savePost(newPostData: INewPostData) {
  const response = await fetch(import.meta.env.VITE_REACT_APP_API_URL, {
    method: "POST",
    body: JSON.stringify(newPostData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const body = (await response.json()) as unknown;

  assertIsSavedPost(body);
  return {
    //merging in the new blog post "title" and "description" with the "id" that is provided from the REST API
    ...newPostData, //the blog post title and description
    ...body, //the id returned from the REST API
  };
}

export function assertIsSavedPost(post: any): asserts post is ISavedPostId {
  if (!("id" in post)) {
    throw new Error("post doesn't contain an id");
  }
  if (typeof post.id !== "number") {
    throw new Error("id is not a number");
  }
}
