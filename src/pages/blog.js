import React from "react";
import { useStaticQuery, Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

export default function Blog() {
    const data = useStaticQuery(graphql`
        query{
            markdownRemark(frontmatter: {category: {eq: "blog index"}}) {
                frontmatter {
                  title
                }
            }
            allMarkdownRemark(
                filter: {frontmatter: {category: {eq: "blog"}, published: {eq: true}}},
                sort: {fields: frontmatter___date, order: DESC},
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

    const seoTitle = data.markdownRemark.frontmatter.title;
    const blogs = data.allMarkdownRemark.edges;

    return (
        <Layout>
            <SEO title={seoTitle} />
            <section>
                {
                    blogs && blogs.length > 0 &&
                    blogs.map(({ node }) => (
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
            </section>
        </Layout>
    );
}