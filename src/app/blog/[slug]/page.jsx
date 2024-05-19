import { Tag, getFormattedDate, getPostContent, getPostMetadata } from "@/util"
import PrismFormat from "../PrismFormat";

export const generateStaticParams = async () => {
    const posts = getPostMetadata();
    return posts.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
    const id = params?.slug ? ` - ${params?.slug}` : '';
    return {
        title: `Blogs ${id.replaceAll('_', ' ')}`
    }
}

export default function PostPage({ params: { slug } }) {
    const { data: { title, date, tags }, content } = getPostContent(slug);
    return (
        <>
            <h1>{title}</h1>
            <small>Last Updated: {getFormattedDate(date)}</small>
            <div><Tag tags={tags} /></div>
            <PrismFormat content={content} />
        </>
    );
}