import PostItem from "@/components/PostItem";
import { getPostMetadata } from "@/util"

export async function generateMetadata() {
    return {
        title: 'Blogs - Buddha Gurung'
    }
}

export default function Blog() {
    const posts = getPostMetadata();
    return posts.map(post => <PostItem key={post.title} {...post} />);
}