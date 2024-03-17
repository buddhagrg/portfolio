import PostItem from "@/components/PostItem";
import { getPostMetadata } from "@/util";

export default function LatestPosts() {
    const posts = getPostMetadata();
    return (
        <>
            <div className="latest-post-label">Latest Posts</div>
            {
                posts.map(post => <PostItem key={post.title} {...post} />)
            }
        </>
    )
}