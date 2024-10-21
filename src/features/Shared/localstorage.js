export const setPostsToLocal = (posts) => {
  localStorage.setItem('posts', JSON.stringify(posts))
}
export const removePostsFromLocal = () => {
  localStorage.clear()
}
export const getPostsFromLocal = () => {
  const data = localStorage.getItem('posts');
  return data === null ? [] : JSON.parse(data);
} 
