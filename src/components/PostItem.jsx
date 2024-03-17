import Link from "next/link";
import { getFormattedDate } from "@/util";

export default function PostItem({ title, date, slug }) {
    return (
        <Link key={title} className="post-title-link" href={`blog/${slug}`}>
            <article className="post-article">
                <div>{title}</div>
                <small>{getFormattedDate(date)}</small>
            </article>
        </Link>
    )
}