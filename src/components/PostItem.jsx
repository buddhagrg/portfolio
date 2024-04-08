import Link from "next/link";
import { getFormattedDate } from "@/util";

export default function PostItem({ title, date, slug }) {
    return (
        <Link href={`blog/${slug}`} className="post">
            <article>
                <div>{title}</div>
                <small>{getFormattedDate(date)}</small>
            </article>
        </Link>
    )
}