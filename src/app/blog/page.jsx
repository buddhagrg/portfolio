import PostItem from "@/components/PostItem";
import { getPostMetadata } from "@/util"

export default function Blog() {
    const posts = getPostMetadata();
    return posts.map(post => <PostItem key={post.title} {...post} />);
}