import React from "react";
import { useStaticQuery, Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

export default function About() {
    const data = useStaticQuery(graphql`
        query{
            markdownRemark(frontmatter: {category: {eq: "about index"}}) {
                frontmatter{
                    title
                }
                html
            }
        }
    `);

    const seoTitle = data.markdownRemark.frontmatter.title;
    const content = data.markdownRemark.html;

    return (
        <Layout>
            <SEO title={seoTitle} />
            <section>
                <div dangerouslySetInnerHTML={{ __html: content }} className="html-post-description" />
            </section>
        </Layout>
    );
}