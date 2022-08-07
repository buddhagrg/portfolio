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
                        excerpt(pruneLength: 160)
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
                <ul className="blog-post-ul">
                    {
                        blogs && blogs.length > 0 &&
                        <ul className="blog-post-ul">
                            {
                                blogs.map(({ node }) => (
                                    <li key={node.id} className="blog-post-list">
                                        <h5>
                                            <Link
                                                to={node.fields.slug}
                                                className="blog-post-link"
                                            >{node.frontmatter.title}</Link>
                                        </h5>
                                        <h6 className="text-muted">{node.frontmatter.date}</h6>
                                        <p className="post-excerpt">{node.excerpt}</p>
                                    </li>
                                ))
                            }
                        </ul>
                    }
                </ul>
            </section>
        </Layout>
    );
}