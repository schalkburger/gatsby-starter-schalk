import { graphql } from 'gatsby';
import * as React from 'react';
import { Helmet } from 'react-helmet';
import './index.scss';

interface NotFoundPageProps {
  data: {
    site: {
      siteMetadata: {
        notfoundheading: string;
        notfoundtext: string;
      },
    },
  };
}

export const NotFoundPageQuery = graphql`
  query NotFoundPageQuery {
    site {
      siteMetadata {
        notfoundheading
        notfoundtext
      }
    }
  }
`;

export default class NotFoundPage extends React.Component<NotFoundPageProps, {}> {

  public render() {
    const {
      notfoundheading,
      notfoundtext,
    } = this.props.data.site.siteMetadata;

    return (
      <div className="index">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{notfoundheading}</title>
        </Helmet>
        <div className="container">
          <h1 className="name">{notfoundheading}</h1>
          <p>{notfoundtext}</p>
        </div>
      </div>
    );
  }
}
