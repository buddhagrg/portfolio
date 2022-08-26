import React from "react";
import { graphql, useStaticQuery } from "gatsby";

export default function Hero() {
  const data = useStaticQuery(graphql`
    query{
      markdownRemark(frontmatter: {category: {eq: "hero index"}}) {
        frontmatter {
          title
          content
        }
      }
    }
  `);

  const hero = data.markdownRemark.frontmatter;

  return (
    <section className="hero-container">
      <h3>{hero.title}</h3>
      <p>{hero.content}</p>
    </section >
  );
}