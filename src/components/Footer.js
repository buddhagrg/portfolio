import React from "react";
import { graphql, useStaticQuery } from "gatsby";

export default function Footer() {
    const data = useStaticQuery(graphql`
        query{
            site{
                siteMetadata{
                    author
                }
            }
        }
    `);

    return (
        <footer>
            &#169; {data.site.siteMetadata.author}
        </footer>
    );
}