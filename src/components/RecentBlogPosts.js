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
                        excerpt(pruneLength: 160)
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
            <ul className="blog-post-ul">
                {
                    blogPosts && blogPosts.length > 0 &&
                    blogPosts.map(({ node }) => (
                        <li key={node.id} className="blog-post-list">
                            <h5>
                                <Link
                                    to={node.fields.slug}
                                    className="blog-post-link"
                                >{node.frontmatter.title}</Link>
                            </h5>
                            <h6 className="text-muted">{node.frontmatter.date}</h6>
                        </li>
                    )
                    )
                }
            </ul>
            <Link to="/blog">
                <button type="button" className="btn btn-primary btn-sm">View More Post</button>
            </Link>
        </section>
    );
}