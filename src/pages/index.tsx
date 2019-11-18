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
          <h1 className="name">{name}</h1>
          <p>“Breathtaking photography that you will remember for a lifetime”</p>
        </Layout>
      </div>
    );
  }
}
