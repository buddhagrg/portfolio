import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";

export default function RecentBlogPosts() {
    const data = useStaticQuery(graphql`
        query{
            allMarkdownRemark(
                filter: {frontmatter: {category: {eq: "blog"}, published: {eq: true}}},
                sort: {fields: frontmatter___date, order: DESC},
                limit:4
            ) 
            {
                edges {
                    node {
                        id
                        frontmatter {
                            title
                            date(formatString: "MMMM DD, YYYY")
                        }
                        excerpt(pruneLength: 80)
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `);

    const heading = "Recent Blog Posts";
    const blogPosts = data.allMarkdownRemark.edges;

    return (
        <section className="recent-blog-post-wrapper">
            <h6>{heading}</h6>
            {
                blogPosts && blogPosts.length > 0 &&
                blogPosts.map(({ node }) => (
                    <Link
                        key={node.id}
                        to={node.fields.slug}
                        className="blog-post-link"
                    >
                        <div className="blog-post-list">
                            <h5 className="blog-post-heading">{node.frontmatter.title}</h5>
                            <p className="post-excerpt">{node.excerpt}</p>
                            <div className="post-date">
                                <strong>Published:</strong><span>{` `}{node.frontmatter.date}</span>
                            </div>
                        </div>
                    </Link>

                ))
            }


            {/* <ul className="blog-post-ul">
                {
                    blogPosts && blogPosts.length > 0 &&
                    blogPosts.map(({ node }) => (
                        <li key={node.id} className="blog-post-list">
                            <Link
                                to={node.fields.slug}
                                className="blog-post-link"
                            >
                                <h5 className="blog-post-heading">{node.frontmatter.title}</h5>
                                <span className="text-muted">{node.frontmatter.date}</span>
                                <p className="post-excerpt">{node.excerpt}</p>
                            </Link>
                        </li>
                    ))
                }
            </ul> */}
        </section >
    );
}