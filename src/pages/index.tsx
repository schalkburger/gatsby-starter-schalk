import { graphql } from 'gatsby';
import * as React from 'react';
import { Helmet } from 'react-helmet';
import './index.scss';

interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        name: string;
        homePage: {
          heroText: string;
          heroSubtitle: string;
        },
      },
    },
  };
}

export const indexPageQuery = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        name
        homePage {
          heroText
        }
      }
    }
  }
`;

export default class IndexPage extends React.Component<IndexPageProps, {}> {

  public render() {
    const {
      name,
    } = this.props.data.site.siteMetadata;

    const {
      heroText,
    } = this.props.data.site.siteMetadata.homePage;

    return (
      <div className="index">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{name}</title>
        </Helmet>
        <div className="container">
          <h1 className="name">{name}</h1>
          <p>{heroText}</p>
        </div>
      </div>
    );
  }
}
