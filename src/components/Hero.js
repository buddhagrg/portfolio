import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  const data = useStaticQuery(
    graphql`
    query{
      site{
        siteMetadata{
          social{
            github
            linkedin
            twitter
          }
        }
      }
      markdownRemark(frontmatter: {category: {eq: "hero index"}}) {
        frontmatter {
          intro
          content
        }
        html
      }
    }
    
        `
  )

  const hero = data.markdownRemark.frontmatter;
  const social = data.site.siteMetadata.social;

  return (
    <div className="section-parent-wrapper">
      <div className="hero-section-wrapper">
        <h3 className="hero-intro">{hero.intro}</h3>
        <div className="hero-content">{hero.content}</div>
        <div className="hero-social">
          <a href={social && social.github} aria-label="Github" className="mr-4"><FaGithub size="25" /></a>
          <a href={social && social.linkedin} aria-label="LinkedIn" className="mr-4"><FaLinkedin size="25" /></a>
        </div>
      </div>
    </div>
  );
}