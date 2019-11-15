import { graphql } from 'gatsby';
import * as React from 'react';
import { Helmet } from 'react-helmet';
import './index.scss';

interface NotFoundPageProps {
  data: {
    site: {
      siteMetadata: {
        notFoundPage: {
          heading: string;
          text: string;
        },
      },
    },
  };
}

export const NotFoundPageQuery = graphql`
  query NotFoundPageQuery {
    site {
      siteMetadata {
        notFoundPage {
          heading
          text
        }
      }
    }
  }
`;

export default class NotFoundPage extends React.Component<NotFoundPageProps, {}> {

  public render() {
    const {
      heading,
      text,
    } = this.props.data.site.siteMetadata.notFoundPage;

    return (
      <div className="index">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{heading}</title>
        </Helmet>
        <div className="container">
          <h1 className="name">{heading}</h1>
          <p>{text}</p>
        </div>
      </div>
    );
  }
}
