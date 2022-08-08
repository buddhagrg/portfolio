import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    const data = useStaticQuery(graphql`
        query{
            site{
                siteMetadata{
                    author
                    social{
                        github
                        linkedin
                    }
                }
            }
        }
    `);

    const social = data.site.siteMetadata.social;
    const author = data.site.siteMetadata.author;

    return (
        <footer>
            <div className="footer-wrapper d-flex">
                <div>&#169; {author}</div>
                <div className="ms-auto">
                    <a href={social && social.github} aria-label="Github">
                        <FaGithub size="28" />
                    </a>
                    <a href={social && social.linkedin} aria-label="LinkedIn" className="ms-4">
                        <FaLinkedin size="28" />
                    </a>
                </div>
            </div>
        </footer>
    );
}