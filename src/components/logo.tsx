import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import * as React from 'react';
import '../../src/pages/index.scss';

export default () => {
    const data = useStaticQuery(graphql`
      query MyQuery {
        file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
            # Specify the image processing specifications right in the query.
            # Makes it trivial to update as your page's design changes.
            fixed(width: 347, height: 21) {
                ...GatsbyImageSharpFixed
            }
            }
        }
      }
    `);
    return (
        <div className="logo">
            <Img
                fixed={data.file.childImageSharp.fixed}
                alt="Logo"
            />
        </div>
    );
};
