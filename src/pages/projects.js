import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

export default function Projects() {
    const data = useStaticQuery(graphql`
        query{
            markdownRemark(frontmatter: {category: {eq: "projects index"}}) {
                frontmatter {
                  title
                }
            }
            allMarkdownRemark(
                filter: {frontmatter: {category: {eq: "project"}}}
                sort: {fields: frontmatter___date, order: DESC}
                ) {
                edges {
                  node {
                    id
                    frontmatter {
                      title
                      subtitle
                      code
                      demo
                    }
                  }
                }
            }
        }
    `);

    const seoTitle = data.markdownRemark.frontmatter.title;
    const projects = data.allMarkdownRemark.edges;

    return (
        <Layout>
            <SEO title={seoTitle} />
            <section>
                {
                    projects && projects.length > 0 &&
                    <div className="row">
                        {
                            projects.map(({ node }) => (
                                <div key={node.id} className="col col-lg-4 col-sm-12 col-12 mb-md-0 mb-2">
                                    <div className="card h-100">
                                        <div className="card-body">
                                            <h5>{node.frontmatter.title}</h5>
                                            <p>{node.frontmatter.subtitle}</p>
                                            <div className="d-flex">
                                                <a className="anchor-link" href={node.frontmatter.code} target="_blank">Code</a>
                                                {
                                                    node.frontmatter.demo &&
                                                    <div>
                                                        <span>/</span>
                                                        <a href={node.frontmatter.demo} className="anchor-link" target="_blank">Demo</a>
                                                    </div>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                }
            </section>
        </Layout >
    );
}