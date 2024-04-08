import PostItem from "@/components/PostItem";
import { getPostMetadata } from "@/util";

export default function LatestPosts() {
    const posts = getPostMetadata();
    return (
        <>
            <div className="page-heading">Latest Posts</div>
            <hr />
            {
                posts.map(post => <PostItem key={post.title} {...post} />)
            }
        </>
    )
}