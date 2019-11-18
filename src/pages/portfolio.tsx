import { graphql } from 'gatsby';
import * as React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout';
import './index.scss';

interface PortfolioPageProps {
  data: {
    site: {
      siteMetadata: {
        name: string;
      },
    },
  };
}

export const PortfolioPageQuery = graphql`
  query PortfolioPageQuery {
    site {
      siteMetadata {
        name
      }
    }
  }
`;

export default class PortfolioPage extends React.Component<PortfolioPageProps, {}> {

  public render() {
    const {
      name,
    } = this.props.data.site.siteMetadata;

    return (
      <div className="page portfolio">
        <Layout {...this.props}>
          <h1 className="name">{name}</h1>
          <p>Portfolio page content</p>
        </Layout>
      </div>
    );
  }
}
