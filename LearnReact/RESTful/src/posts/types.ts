//core blog post type
export interface IPostData {
  id: number;
  title: string;
  description: string;
}

//new blog post type
export interface INewPostData {
  title: string;
  description: string;
}

//data from the API when the blog post is successfully saved
export interface ISavedPostId {
  id: number;
}
