import { graphql } from 'gatsby';
import * as React from 'react';
import { Helmet } from 'react-helmet';
import './index.scss';

interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        name: string;
        tagline: string;
      },
    },
  };
}

export const indexPageQuery = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        name
        tagline
      }
    }
  }
`;

export default class IndexPage extends React.Component<IndexPageProps, {}> {

  public render() {
    const {
      name,
      tagline,
    } = this.props.data.site.siteMetadata;

    return (
      <div className="index">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Gatsby + SASS + Typescript</title>
        </Helmet>
        <div className="container">
          <h1 className="name">{name}</h1>
          <p>{tagline}</p>
        </div>
      </div>
    );
  }
}
