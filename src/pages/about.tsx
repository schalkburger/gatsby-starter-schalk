import { graphql } from 'gatsby';
import * as React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout';
import './index.scss';

interface AboutPageProps {
  data: {
    site: {
      siteMetadata: {
        name: string;
      },
    },
  };
}

export const AboutPageQuery = graphql`
  query AboutPageQuery {
    site {
      siteMetadata {
        name
      }
    }
  }
`;

export default class AboutPage extends React.Component<AboutPageProps, {}> {

  public render() {
    const {
      name,
    } = this.props.data.site.siteMetadata;

    return (
      <div className="page about">
        <Layout {...this.props}>
          <h1 className="name">{name}</h1>
          <p>About page content</p>
        </Layout>
      </div>
    );
  }
}
