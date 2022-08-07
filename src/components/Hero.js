import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  const data = useStaticQuery(graphql`
    query{
      site{
        siteMetadata{
          social{
            github
            linkedin
          }
        }
      }
      markdownRemark(frontmatter: {category: {eq: "hero index"}}) {
        frontmatter {
          title
          content
        }
      }
    }
  `);

  const hero = data.markdownRemark.frontmatter;
  const social = data.site.siteMetadata.social;

  return (
    <section className="hero-container">
      <h2>{hero.title}</h2>
      <p>{hero.content}</p>
      <a href={social && social.github} aria-label="Github">
        <FaGithub size="25" />
      </a>
      <a href={social && social.linkedin} aria-label="LinkedIn">
        <FaLinkedin size="25" />
      </a>
    </section >
  );
}