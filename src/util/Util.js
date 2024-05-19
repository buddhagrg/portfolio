import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { format } from 'date-fns';

const BASE_PATH = 'content';
const POST_PATH = '/blogs';
const PROJECT_PATH = '/projects';
const DEFAULT_DATE_FORMAT = 'MMMM dd, yyyy';

export const getPostMetadata = () => {
    const files = fs.readdirSync(path.join(BASE_PATH + POST_PATH));
    const markdownPosts = files.filter(file => file.endsWith('.md'));

    const posts = markdownPosts.map(filename => {
        const fileContents = fs.readFileSync(path.join(BASE_PATH, POST_PATH, filename), 'utf8');
        const { data: { title, date, published, tags } } = matter(fileContents);
        if (!published) return null;
        return {
            title,
            date,
            tags,
            slug: filename.replace('.md', '')
        }
    }).filter(Boolean);

    return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export const getFormattedDate = (dt) => {
    if (!dt) return "";

    const formattedDate = format(dt, DEFAULT_DATE_FORMAT);
    return formattedDate;
}

export const getPostContent = (slug) => {
    const file = path.join(BASE_PATH, POST_PATH, slug) + '.md';
    const content = fs.readFileSync(file, 'utf8');
    const post = matter(content);
    return post;
}

export const Tag = ({ tags }) => {
    if (tags && tags.length > 0) {
        return tags.split(",").map((tag, index) => (
            <span key={index} className="badge tag-badge">{tag}</span>
        ))
    }
    return null;
}

export const getProjectMetadata = () => {
    const files = fs.readdirSync(path.join(BASE_PATH + PROJECT_PATH));
    const markdownProjects = files.filter(file => file.endsWith('.md'));

    const projects = markdownProjects.map(filename => {
        const fileContents = fs.readFileSync(path.join(BASE_PATH, PROJECT_PATH, filename), 'utf8');
        const { data: { title, subtitle, code, demo, date, stack } } = matter(fileContents);

        return {
            title,
            subtitle,
            code,
            demo,
            date,
            stack
        }
    }).filter(Boolean);

    return projects.sort((a, b) => new Date(b.date) - new Date(a.date));
}