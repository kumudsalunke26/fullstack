import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import MarkdownIt from 'markdown-it';

const postsDirectory = path.resolve(__dirname, '../posts');

export function getAllPosts() {
    const files = fs.readdirSync(postsDirectory);
    return files.map((fileName) => {
        const slug = fileName.replace(/\.md$/, '');
        const filePath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(filePath, 'utf-8');

        const { data, content } = matter(fileContents);
        const md = new MarkdownIt();
        const contentHtml = md.render(content);

        return {
            slug,
            data,
            contentHtml,
        };
    });
}

export function getPostBySlug(slug) {
    const filePath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(filePath, 'utf-8');

    const { data, content } = matter(fileContents);
    const md = new MarkdownIt();
    const contentHtml = md.render(content);

    return {
        slug,
        data,
        contentHtml,
    };
}
