import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css";



const getPosts = async () => {
  const res = await fetch(
"https://jsonplaceholder.typicode.com/posts" , {cache:'no-store'});

 if (!res.ok) {
  throw new Error("Something went wrong!");
 }
 return res.json();
}

const BlogPage = async () => {
const posts = await getPosts();

console.log(posts)
  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
