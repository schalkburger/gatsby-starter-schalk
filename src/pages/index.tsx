import { graphql } from 'gatsby';
import * as React from 'react';
import Layout from '../components/layout';
import './index.scss';

interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        name: string;
      },
    },
  };
}

export const indexPageQuery = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        name
      }
    }
  }
`;

export default class IndexPage extends React.Component<IndexPageProps, {}> {

  public render() {
    const {
      name,
    } = this.props.data.site.siteMetadata;

    return (
      <div className="page home">
        <Layout {...this.props}>
          <div className="hero">
            <h1>“Breathtaking photography that you will remember for a lifetime”</h1>
            <p>{name}</p>
            <a href="/contact" className="button">Contact Me</a>
          </div>
        </Layout>
      </div>
    );
  }
}
